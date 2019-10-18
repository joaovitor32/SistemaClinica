import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { FuncaoService } from '../services/funcao/funcao.service';
import { funcao } from '../services/funcao/funcao';

@Component({
	selector: 'app-funcoes',
	templateUrl: './funcoes.component.html',
	styleUrls: ['./funcoes.component.css']
})
export class FuncoesComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'descricao', 'setor', 'operations'];
	dataSource: MatTableDataSource<funcao>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(public dialog: MatDialog, public sideNav:SidenavComponent, private funcaoService:FuncaoService) { }

	ngOnInit() {
		this.sideNav.activeView="Funcoes";
		this.carregarDadosTabela();
	}

	async carregarDadosTabela() {
		await this.funcaoService.listaDeFuncoes().subscribe(funcao =>{
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

	// popularTabela(){
	// 	this.funcaoService.listaDeFuncoes().subscribe(funcoes=>{
	// 		for(let funcao of funcoes) {
	// 			this.funcoes.push(funcao)
	// 		  }
	// 		}
	// 	);
	// } 
}
