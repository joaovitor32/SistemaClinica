import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { CategoriaRiscoService } from '../../services/categoria-risco/categoria-risco.service';
import { ModalCategoriaRiscosComponent } from './modal-categoriarisco/modal-categoriarisco'

@Component({
    selector: 'app-categoriarisco',
    templateUrl: './categoriarisco.html'
})
export class CategoriaRiscoComponent implements OnInit {


    displayedColumns: string[] = ['id', 'nome', 'descricao', 'operations'];
    dataSource: MatTableDataSource<any>;
    dataInput: string;
    categoriariscos = [];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private sidenavComponent: SidenavComponent,
        private dialog: MatDialog,
        private CategoriaRiscoService : CategoriaRiscoService
    ) { }

    ngOnInit() {
        this.sidenavComponent.activeView = "Categorias dos Riscos";
        this.carregarCategoriaRisco();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    async carregarCategoriaRisco() {
        await this.CategoriaRiscoService.listaCategoriaRisco().subscribe(categoriariscos => {
            this.dataSource = new MatTableDataSource(categoriariscos);
            this.dataSource.paginator = this.paginator;
        })
    }

    visualizar(id) {
        let dialog = this.dialog.open(ModalCategoriaRiscosComponent, {
            width: '700px', data: { id: id, acao: 'VISUALIZAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id) {
        let dialog = this.dialog.open(ModalCategoriaRiscosComponent, {
            width: '700px', data: { id: id, acao: 'EDITAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
    
    deletar(id) {
        let dialog = this.dialog.open(ModalCategoriaRiscosComponent, {
            width: '400px', data: { id: id, acao: 'DELETAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
}
