import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import { EstadosService } from "../../services/estado/estado.service";
import { PreagendarService } from 'src/app/services/preagendar/preagendar.service';
import {ConsultaExameProfissionalService} from '../../services/consulta_exame_profissional/consulta-exame-profissional.service'
import { ModalCEPComponent } from '../modal-cep/modal-cep.component';
import {setData} from '../date'

export interface estadoLista {
  codConsulta: number;
  paciente: string;
  empresa: string;
  dataHora: string;
  codTipoConsulta: number;
  tipo_consulta: string;
  inicio: string;
  termino: string;
  codEstado: number;
}

@Component({
  selector: 'app-agendados',
  templateUrl: './agendados.component.html',
  styleUrls: ['./agendados.component.css']
})

export class AgendadosComponent implements OnInit {

  displayedColumns: string[] = [
    "codEstado",
    "codConsulta",
    "paciente",
    "empresa",
    "dataHora",
    "codTipoConsulta",
    "tipo_consulta",
    "operations"
  ];

  dataSource: MatTableDataSource<estadoLista>;
  dataInput: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public sideNav: SidenavComponent,
    private estadoService: EstadosService,
    private preagendarService:PreagendarService,
    private _snackBar: MatSnackBar,
    private cepService:ConsultaExameProfissionalService
  ) { }

  ngOnInit() {
    this.sideNav.activeView = "Estados";
    this.carregarDadosTabela();
    this.checkState();
  }

  carregarDadosTabela() {
    this.estadoService.listaDeEstados().subscribe(empresas => {
      let dados = Object.values(empresas).map(estado => {
        estado.dataHora=setData(estado.dataHora);
        return estado;
      });
      this.dataSource = new MatTableDataSource(dados);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  checkState() {
    this.preagendarService.currentAgendados.subscribe(message=>{
      if(message=="RELOAD_AGENDADOS"){
        this.carregarDadosTabela();
        this.preagendarService.updateTabelaAgendados('DONT_RELOAD_AGENDADOS')
      }
    })
  }
  

  openSnackBar(mensagem, nivel) {
    switch (nivel) {
        case 1:
            nivel = "alerta-sucesso";
            break;
        case 0:
            nivel = "alerta-fracasso";
            break;
    }
    this._snackBar.open(mensagem, "", {
        duration: 2000,
        panelClass: nivel
    });
  }

   visualizar(id) {
       let dialog = this.dialog.open(ModalCEPComponent, {
           width: "400px",
           data: { id: id ,tipo:"AGENDADOS"}
       });

       dialog.afterClosed().subscribe(() => {
           this.ngOnInit();
       });
   }

  // editar(id) {
  //     let dialog = this.dialog.open(ModalEmpresaComponent, {
  //         width: "700px",
  //         data: { id: id, acao: "EDITAR" }
  //     });
  //     dialog.afterClosed().subscribe(() => {
  //         this.ngOnInit();
  //     });
  // }

  // deletar(id) {
  //     let dialog = this.dialog.open(ModalEmpresaComponent, {
  //         width: "400px",
  //         data: { id: id, acao: "DELETAR" }
  //     });
  //     dialog.afterClosed().subscribe(() => {
  //         this.ngOnInit();
  //     });
  // }
}
