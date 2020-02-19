import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

// import { ModalMedicosComponent } from './modal-medicos/modal-medicos.component';
import { profissionalService } from '../services/profissional/profissional.service';
import { profissional } from '../services/profissional/profissional';

@Component({
	selector: 'app-profissionais',
	templateUrl: './profissionais.component.html',
	styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'cpf', 'identificacao', 'especialidade', 'operations'];
	dataSource: MatTableDataSource<profissional>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(public dialog: MatDialog, public sideNav:SidenavComponent, private profissionalService:profissionalService) { }

	ngOnInit() {
		this.sideNav.activeView="Profissionais";
		this.carregarDadosTabela();
	}

	carregarDadosTabela() {
		this.profissionalService.listaDeProfissionais().subscribe(profissionais =>{
			this.dataSource = new MatTableDataSource(profissionais);
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
// 		let dialog = this.dialog.open(ModalMedicosComponent, {
// 			width: '700px', data: { id: id, acao: 'VISUALIZAR' }
// 		});

// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}

// 	editar(id){
// 		let dialog = this.dialog.open(ModalMedicosComponent, {
// 			width: '700px', data: { id: id, acao: 'EDITAR' }
// 		});
// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}

// 	deletar(id){
// 		let dialog = this.dialog.open(ModalMedicosComponent, {
// 			width: '400px', data: { id: id, acao: 'DELETAR' }
// 		});
// 		dialog.afterClosed().subscribe( () => {
// 			this.ngOnInit();
// 		});
// 	}
}
