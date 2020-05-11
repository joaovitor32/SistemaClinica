import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { FaturaService } from '../../../services/fatura/fatura.service';
import { ModalFaturaComponent } from './modal-fatura/modal-fatura.component'; import { ModalNovaFaturaComponent } from './modal-nova-fatura/modal-nova-fatura.component';
1

export interface faturaLista {
    codFatura: number;
    empresa: string;
    dataHora: string;
    descricao: string;
    pagamento: string;
}

@Component({
    selector: 'app-fatura',
    templateUrl: './fatura.component.html'
})
export class FaturaComponent implements OnInit {

    displayedColumns: string[] = ['empresa', 'dataHora', 'descricao', 'pagamento', 'operations'];
    dataSource: MatTableDataSource<faturaLista>;
    dataInput: string;


    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(public dialog: MatDialog, private faturaService: FaturaService) { }

    ngOnInit() {
        this.carregarDadosTabela();
    }

    carregarDadosTabela() {
        this.faturaService.listaDeFaturas().subscribe((faturas) => {
            
            let dados =Object.values(faturas).map(fatura => {
                fatura.pagamento = fatura.pagamento == 1 ? 'Pago' : 'A receber';
                return fatura;
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

    visualizar(id: number): void {
    
        let dialog = this.dialog.open(ModalFaturaComponent, {
            width: '650px', data: { id: id, acao: 'VISUALIZAR' }
        });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    editar(id: number): void {
        let dialog = this.dialog.open(ModalFaturaComponent, {
            width: '650px', data: { id: id, acao: 'EDITAR' }
        });
        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }

    criarFatura(): void {
        let dialog = this.dialog.open(ModalNovaFaturaComponent, { width: '650px' });

        dialog.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
}
