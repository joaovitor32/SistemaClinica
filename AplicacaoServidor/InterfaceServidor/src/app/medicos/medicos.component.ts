import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MedicoService } from '../../services/medico.service';

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

	medicos:any;
	html:string;

	constructor(public sideNav:SidenavComponent, private medicoService:MedicoService) { }

	async ngOnInit() {
		this.sideNav.activeView="Médicos";
		this.medicos = await this.medicoService.listaDeMedicos();
		this.html = this.popularTabela();
	}
	
	popularTabela(){
		let i = 0;
		var html = this.medicos.map( medico => {
			return '<tr data-codigo='+ medico.codMedicos +'><th scope="row"> '+ (++i) +' </th><td> '+ medico.nome +' </td><td> '+ medico.cpf +' </td><td> '+ medico.crm +' </td></tr>';
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.medicos.filter( medico => {
			return medico.nome.match(regex) || medico.cpf.match(regex) || medico.crm.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( medico => {
			return '<tr data-codigo='+ medico.codMedicos +'><th scope="row"> '+ (++i) +' </th><td> '+ medico.nome +' </td><td> '+ medico.cpf +' </td><td> '+ medico.crm +' </td></tr>';
		}).join('');
	}
}
