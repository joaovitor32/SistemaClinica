import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RiscoService } from '../../services/risco/risco.service';
import { ModalRiscoComponent } from './modal-risco/modal-risco.component';

@Component({
    selector: 'app-risco',
    templateUrl: './risco.component.html'
})
export class RiscoComponent implements OnInit {

    risco = [];
    displayedColumns: string[] = ['id', 'nome', 'descricao', 'categoria', 'operations'];
    dataSource: MatTableDataSource<any>;
    dataInput: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private dialog: MatDialog,
        private sideNav: SidenavComponent,
        private riscoService: RiscoService
    ) { }

    ngOnInit() {
        this.sideNav.activeView = "Risco";
        this.carregarRiscos();
    }
    carregarRiscos() {
        this.riscoService.listaDeRiscos().subscribe(riscos => {
            this.dataSource = new MatTableDataSource(riscos);
            this.dataSource.paginator = this.paginator;
        })
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    visualizar(id) {
        let dialog = this.dialog.open(ModalRiscoComponent, {
            width: '700px', data: { id: id, acao: 'VISUALIZAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    editar(id) {
        let dialog = this.dialog.open(ModalRiscoComponent, {
            width: '700px', data: { id: id, acao: 'EDITAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
    deletar(id) {
        let dialog = this.dialog.open(ModalRiscoComponent, {
            width: '400px', data: { id: id, acao: 'DELETAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        })
    }
}
