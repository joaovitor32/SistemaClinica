import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProfissionalService } from '../../services/profissional/profissional.service';

import { ModalProfissionalComponent } from './modal-profissional/modal-profissional.component';

@Component({
    selector: 'app-profissional',
    templateUrl: './profissional.component.html'
})
export class ProfissionalComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'cpf', 'identificacao', 'operations'];
    dataSource: MatTableDataSource<any>;
    dataInput: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private profissionalService: ProfissionalService,
        public matDialog: MatDialog,
        public sideNav: SidenavComponent,
        private dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.sideNav.activeView = "Profissional";
        this.carregarProfissional();

    }
    async carregarProfissional() {
        await this.profissionalService.listaDeProfissional().subscribe(profissionais => {
            this.dataSource = new MatTableDataSource(Object.values(profissionais));
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
        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: '700px',
            data: { id: id, acao: 'VISUALIZAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    editar(id) {
        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: '700px', data: { id: id, acao: 'EDITAR' }
        })
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    deletar(id) {
        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: '400px', data: { id: id, acao: 'DELETAR' }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
