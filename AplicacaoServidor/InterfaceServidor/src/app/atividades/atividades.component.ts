import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { AtividadeService } from '../services/atividade/atividade.service';
import { atividades } from '../services/atividade/atividades';

@Component({
	selector: 'app-atividades',
	templateUrl: './atividades.component.html',
	styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'descricao', 'operations'];
	dataSource: MatTableDataSource<atividades>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(public dialog: MatDialog, public sideNav:SidenavComponent, private atividadeService:AtividadeService) { }

	ngOnInit() {
		this.sideNav.activeView="Atividades";
		this.carregarDadosTabela();
	}

	async carregarDadosTabela() {
		await this.atividadeService.listaDeAtividades().subscribe(atividade =>{
			this.dataSource = new MatTableDataSource(atividade);
			this.dataSource.paginator = this.paginator;
		});
		
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

}
	

