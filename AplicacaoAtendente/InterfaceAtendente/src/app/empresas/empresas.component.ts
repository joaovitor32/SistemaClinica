import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { EmpresasService } from './../services/empresas/empresas.service';
// import { ModalEmpresaComponent } from './modal-empresa/modal-empresa.component';

export interface empresaLista{
    codEmpresa:number;
    nome:string;
    cnpj:string;
    telefone1:string;
    telefone2:string;
    tipoPgto:any;
}
@Component({
	selector: 'app-empresas',
	templateUrl: './empresas.component.html',
	styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit{

	displayedColumns: string[] = ['id', 'name', 'cnpj', 'telefones', 'payment'];
	dataSource: MatTableDataSource<empresaLista>;
	dataInput:string;
	
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	
	constructor(public dialog: MatDialog, public sideNav:SidenavComponent, private empresaService:EmpresasService) { 
		
	}

	ngOnInit() {
		this.sideNav.activeView = "Empresas";
		this.carregarDadosTabela();
	}

	async carregarDadosTabela() {
		await this.empresaService.listaDeEmpresas().subscribe(empresas =>{
			let dados = empresas.map(empresa => {
				empresa.tipoPgto = empresa.tipoPgto == 1 ? 'Fatura' : 'À vista';
				return empresa;
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


// 	visualizar(id){
// 		let dialog = this.dialog.open(ModalEmpresaComponent, {
// 			width: '700px', data: { id: id, acao: 'VISUALIZAR' }
// 		});

// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}

// 	editar(id){
// 		let dialog = this.dialog.open(ModalEmpresaComponent, {
// 			width: '700px', data: { id: id, acao: 'EDITAR' }
// 		});
// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}

// 	deletar(id){
// 		let dialog = this.dialog.open(ModalEmpresaComponent, {
// 			width: '400px', data: { id: id, acao: 'DELETAR' }
// 		});
// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}
}