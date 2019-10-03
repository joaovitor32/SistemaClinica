import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ExameService } from '../services/exame/exame.service';

@Component({
	selector: 'app-exames',
	templateUrl: './exames.component.html',
	styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

	exames=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent, private exameService:ExameService) { }

	async ngOnInit() {
		this.sideNav.activeView = "Exames";
		this.popularTabela();
	}
	popularTabela(){
		this.exameService.listaDeExames().subscribe(exames=>{
			for(let exame of exames){
				this.exames.push(exame);
			}
		})
	}
	
}
