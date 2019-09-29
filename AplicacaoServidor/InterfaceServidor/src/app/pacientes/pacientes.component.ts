import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { PacienteService } from '../services/paciente/paciente.service';

@Component({
	selector: 'app-pacientes',
	templateUrl: './pacientes.component.html',
	styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

	pacientes:any;
	html:string;

	constructor(public sideNav:SidenavComponent,private pacienteService:PacienteService) { }

	async ngOnInit() {
		this.sideNav.activeView = "Pacientes";
		this.pacientes = await this.pacienteService.listaDePacientes();
		this.html = this.popularTabela();
	}

	popularTabela(){
		let i = 0;
		var html = this.pacientes.map( paciente => {
			return '<tr data-codigo='+ paciente.codPaciente +'><th scope="row"> '+ (++i) +' </th><td> '+ paciente.nome +' </td><td> '+ paciente.cpf +' </td></tr>'
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.pacientes.filter( paciente => {
			return paciente.nome.match(regex) || paciente.cpf.match(regex)
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( paciente => {
			return '<tr data-codigo='+ paciente.codPaciente +'><th scope="row"> '+ (++i) +' </th><td> '+ paciente.nome +' </td><td> '+ paciente.cpf +' </td></tr>'
		}).join('');
	}
}
