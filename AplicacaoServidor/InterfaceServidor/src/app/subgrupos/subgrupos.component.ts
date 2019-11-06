import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { SubgrupoService } from '../services/subgrupo/subgrupo.service';
import { subgrupo } from '../services/subgrupo/subgrupo';

@Component({
	selector: 'app-subgrupos',
	templateUrl: './subgrupos.component.html',
	styleUrls: ['./subgrupos.component.css']
})
export class SubgruposComponent implements OnInit {

	displayedColumns: string[] = ['id', 'name', 'funcao', 'operations'];
	dataSource: MatTableDataSource<subgrupo>;
	dataInput:string;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	constructor(public sideNav:SidenavComponent, private subgrupoService:SubgrupoService) { }

	ngOnInit() {
		this.sideNav.activeView="Subgrupos";
		this.carregarDadosTabela();
	}
	
	async carregarDadosTabela() {
		await this.subgrupoService.listaDeSubgrupo().subscribe(subgrupos =>{
			this.dataSource = new MatTableDataSource(subgrupos);
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
