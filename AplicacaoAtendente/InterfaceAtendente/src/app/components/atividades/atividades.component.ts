import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import { ModalAtividadesComponent } from "./modal-atividades/modal-atividades.component";
import { AtividadeService } from "../../services/atividade/atividade.service";
import { atividades } from "../../services/atividade/atividades";

@Component({
    selector: "app-atividades",
    templateUrl: "./atividades.component.html",
    styleUrls: ["./atividades.component.css"]
})
export class AtividadesComponent implements OnInit {
    displayedColumns: string[] = ["id", "name", "descricao", "operations"];
    dataSource: MatTableDataSource<atividades>;
    dataInput: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        public dialog: MatDialog,
        public sideNav: SidenavComponent,
        private atividadeService: AtividadeService
    ) {}

    ngOnInit() {
        this.sideNav.activeView = "Atividades";
        this.carregarDadosTabela();
    }

    async carregarDadosTabela() {
        await this.atividadeService
            .listaDeAtividades()
            .subscribe(atividades => {
                this.dataSource = new MatTableDataSource(atividades);
                this.dataSource.paginator = this.paginator;
            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    visualizar(id) {
        let dialog = this.dialog.open(ModalAtividadesComponent, {
            width: "700px",
            data: { id: id, acao: "VISUALIZAR" }
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id) {
        let dialog = this.dialog.open(ModalAtividadesComponent, {
            width: "700px",
            data: { id: id, acao: "EDITAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    deletar(id) {
        let dialog = this.dialog.open(ModalAtividadesComponent, {
            width: "400px",
            data: { id: id, acao: "DELETAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
