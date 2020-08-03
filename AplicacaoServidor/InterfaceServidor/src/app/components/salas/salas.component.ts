import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ModalSalasComponent } from './modal-salas/modal-salas.component';
import { SalasService } from '../../services/salas/salas.service'

@Component({
    selector: 'app-salas',
    templateUrl: './salas.component.html'
})
export class SalasComponent implements OnInit {


    displayedColumns: string[] = ['id', 'nome', 'descricao', 'operations'];
    dataSource: MatTableDataSource<any>;
    dataInput: string

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private sidenavComponent: SidenavComponent,
        private salaService: SalasService,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.sidenavComponent.activeView = "Sala";
        this.carregarSalas();
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    async carregarSalas() {
        await this.salaService.listaDeSalas().subscribe(salas => {
            this.dataSource = new MatTableDataSource(salas);
            this.dataSource.paginator = this.paginator;
        })
    }
    visualizar(id) {
        let dialog = this.dialog.open(ModalSalasComponent, {
            width: '700px', data: { id: id, acao: 'VISUALIZAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id) {
        let dialog = this.dialog.open(ModalSalasComponent, {
            width: '700px', data: { id: id, acao: 'EDITAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
    deletar(id) {
        let dialog = this.dialog.open(ModalSalasComponent, {
            width: '400px', data: { id: id, acao: 'DELETAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
}
