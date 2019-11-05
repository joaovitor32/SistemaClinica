import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MedicoService } from '../services/medico/medico.service';
import { medico } from '../services/medico/medico';

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'cpf', 'crm', 'especialidade', 'operations'];
	dataSource: MatTableDataSource<medico>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(public sideNav:SidenavComponent, private medicoService:MedicoService) { }

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
}
