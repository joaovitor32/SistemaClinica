import { Component, OnInit, ViewChild,ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalFuncoesComponent } from "./modal-funcoes/modal-funcoes.component";
import { FuncaoService } from "../../services/funcao/funcao.service";
import { funcao } from "../../services/funcao/funcao";

@Component({
    selector: "app-funcoes",
    templateUrl: "./funcoes.component.html",
    styleUrls: ["./funcoes.component.css"]
})
export class FuncoesComponent implements OnInit {

    displayedColumns: string[] = ["id","name","descricao","setor","operations"];
    dataSource: MatTableDataSource<funcao>;
    dataInput: string;
    encapsulation: ViewEncapsulation.None;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        public dialog: MatDialog,
        public sideNav: SidenavComponent,
        private funcaoService: FuncaoService,
        private _snackBar: MatSnackBar,
    ) {}

    ngOnInit() {
        this.sideNav.activeView = "Funcoes";
        this.carregarDadosTabela();
    }

    async carregarDadosTabela() {
        await this.funcaoService.listaDeFuncoes().subscribe(funcao => {
            this.dataSource = new MatTableDataSource(funcao);
            this.dataSource.paginator = this.paginator;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    Alert_att(){
        this._snackBar.open("Lista de Funções atualizada !!!", null, {
            duration: 3000,
        });
    }

    visualizar(id) {
        let dialog = this.dialog.open(ModalFuncoesComponent, {
            width: "700px",
            data: { id: id, acao: "VISUALIZAR" }
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id) {
        let dialog = this.dialog.open(ModalFuncoesComponent, {
            width: "700px",
            data: { id: id, acao: "EDITAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    deletar(id) {
        let dialog = this.dialog.open(ModalFuncoesComponent, {
            width: "400px",
            data: { id: id, acao: "DELETAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
