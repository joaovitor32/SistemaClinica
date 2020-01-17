import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MedicoService } from '../services/medico/medico.service';
import { medico } from '../services/medico/medico';
import {ModalMedicosComponent} from './modal-medicos/modal-medicos.component'

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class MedicosComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'cpf', 'crm', 'especialidade', 'operations'];
	dataSource: MatTableDataSource<medico>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(
		public matDialog:MatDialog,
		public sideNav:SidenavComponent, 
		private dialog:MatDialog,
		private medicoService:MedicoService) { }

	ngOnInit() {
		this.sideNav.activeView="Médicos";
		this.carregarDadosTabela();
	}

	async carregarDadosTabela() {
		await this.medicoService.listaDeMedicos().subscribe(medicos =>{
			this.dataSource = new MatTableDataSource(medicos);
			this.dataSource.paginator = this.paginator;
		});
		
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

	visualizar(id){
		let dialog = this.dialog.open(ModalMedicosComponent, {
			width: '700px', data: { id: id, acao: 'VISUALIZAR' }
		});

		dialog.afterClosed().subscribe( () => {
			this.ngOnInit();
		});
	}

	editar(id){
		let dialog = this.dialog.open(ModalMedicosComponent, {
			width: '700px', data: { id: id, acao: 'EDITAR' }
		});
		dialog.afterClosed().subscribe( () => {
			this.ngOnInit();
		});
	}

	deletar(id){
		let dialog = this.dialog.open(ModalMedicosComponent, {
			width: '400px', data: { id: id, acao: 'DELETAR' }
		});
		dialog.afterClosed().subscribe( () => {
			this.ngOnInit();
		});
	}

}
