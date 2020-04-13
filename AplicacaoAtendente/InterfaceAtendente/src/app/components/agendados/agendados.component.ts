import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import { EstadosService } from "../../services/estado/estado.service";
import { PreagendarService } from 'src/app/services/preagendar/preagendar.service';

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
    "horario",
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
    private preagendarService:PreagendarService
  ) { }

  ngOnInit() {
    this.sideNav.activeView = "Estados";
    this.carregarDadosTabela();
    this.checkState();
  }

  carregarDadosTabela() {
    this.estadoService.listaDeEstados().subscribe(empresas => {
      let dados = empresas.map(estado => {
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

  // visualizar(id) {
  //     let dialog = this.dialog.open(ModalEmpresaComponent, {
  //         width: "700px",
  //         data: { id: id, acao: "VISUALIZAR" }
  //     });

  //     dialog.afterClosed().subscribe(() => {
  //         this.ngOnInit();
  //     });
  // }

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
