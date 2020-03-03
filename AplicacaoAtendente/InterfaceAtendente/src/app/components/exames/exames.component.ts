import { Component, OnInit, ViewChild } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import { ModalExamesComponent } from "./modal-exames/modal-exames.component";
import { ExameService } from "../../services/exames/exames.service";
import { exames } from "../../services/exames/exame";

@Component({
    selector: "app-exames",
    templateUrl: "./exames.component.html",
    styleUrls: ["./exames.component.css"]
})
export class ExamesComponent implements OnInit {
    displayedColumns: string[] = [
        "name",
        "descricao",
        "codigo",
        "preco",
        "operations"
    ];
    dataSource: MatTableDataSource<exames>;
    dataInput: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    constructor(
        public dialog: MatDialog,
        public sideNav: SidenavComponent,
        private exameService: ExameService
    ) {}

    async ngOnInit() {
        this.sideNav.activeView = "Exames";
        this.carregarDadosTabela();
    }

    async carregarDadosTabela() {
        await this.exameService.listaDeExames().subscribe(exames => {
            this.dataSource = new MatTableDataSource(exames);
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
        let dialog = this.dialog.open(ModalExamesComponent, {
            width: "700px",
            data: { id: id, acao: "VISUALIZAR" }
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id) {
        let dialog = this.dialog.open(ModalExamesComponent, {
            width: "700px",
            data: { id: id, acao: "EDITAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    deletar(id) {
        let dialog = this.dialog.open(ModalExamesComponent, {
            width: "400px",
            data: { id: id, acao: "DELETAR" }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
