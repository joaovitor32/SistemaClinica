import { Component, OnInit, ViewChild,ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import { EstadosService } from "../../services/estado/estado.service";
import { PreagendarService } from 'src/app/services/preagendar/preagendar.service';
import { ConsultaExameProfissionalService } from '../../services/consulta_exame_profissional/consulta-exame-profissional.service';
import { ModalCatalogoComponent } from './modal-catalogo/modal-catalogo.component';
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
    selector: "app-inicio",
    templateUrl: "./inicio.component.html",
    styleUrls: ["./inicio.component.css"]
})

export class InicioComponent implements OnInit {
   
    encapsulation: ViewEncapsulation.None;

    displayedColumns: string[] = [
        "codEstado",

        "paciente",
        "empresa",
        "dataHora",

        "tipo_consulta",
        "operations"
    ];
    dataSource: MatTableDataSource<estadoLista>;
    dataInput: string;

    constructor(
        private sideNav: SidenavComponent,
        public dialog: MatDialog,
        private estadoService: EstadosService,
        private preagendarService: PreagendarService,
        private _snackBar: MatSnackBar,
        private cepService: ConsultaExameProfissionalService
    ) { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.sideNav.activeView = "Estados";
        this.carregarDadosTabela();
    }

    setFlagCor(estado) {
        switch (estado['estados'].codTipo) {
            case '2':
                estado['cor'] = 'yellow'
                break;
            case '3':
                estado['cor'] = 'blue'
                break;
            case '4':
                estado['cor'] = 'orange'
                break;
            case '5':
                estado['cor'] = 'purple'
                break;
            case '6':
                estado['cor'] = 'green'
                break;
            default:
                break;
        }
    }

    carregarDadosTabela() {
        this.estadoService.listaDeEstadosIniciados().subscribe(empresas => {
            let dados = Object.values(empresas).map(estado => {

                let lastEstadoId = Object.keys(estado['estados']).sort().pop();
                estado['estados'] = estado['estados'][lastEstadoId];

                estado.dataHora=setData(estado.dataHora);
                this.setFlagCor(estado);

                return estado;
            });
            this.dataSource = new MatTableDataSource(dados);
            this.dataSource.paginator = this.paginator;
        });
        this._snackBar.open("Lista de consultas atualizada !!!", null, {
            duration: 3000,
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    visualizar(id) {
        let dialog = this.dialog.open(ModalCEPComponent, {
            width: "650px",
            data: { id: id, tipo: "INICIO" }
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    modalCatalogo() {
        let dialog = this.dialog.open(ModalCatalogoComponent, {
            width: "200px",
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
