import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { ExameService } from '../services/exame/exame.service';
import { exame } from '../services/exame/exame';

@Component({
	selector: 'app-exames',
	templateUrl: './exames.component.html',
	styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

	displayedColumns: string[] = ['name', 'descricao', 'codigo', 'preco', 'operations'];
	dataSource: MatTableDataSource<exame>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	constructor(public sideNav:SidenavComponent, private exameService:ExameService) { }

	async ngOnInit() {
		this.sideNav.activeView = "Exames";
		this.carregarDadosTabela();
	}

	async carregarDadosTabela() {
		await this.exameService.listaDeExames().subscribe(exames =>{
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
	
}
