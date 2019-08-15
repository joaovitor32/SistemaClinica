import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

	jsonMedicos:JSON=JSON.parse('[{"nome":"Eichi Watanabe","cpf":"1212311","crm":"122131312"}]');
	html:string;

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Médicos";
		this.html=this.popularTabela();
	}
	
	popularTabela(){
		var html = '';
		for(let i in this.jsonMedicos){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonMedicos[i].nome +' </td><td> '+ this.jsonMedicos[i].cpf +' </td><td> '+ this.jsonMedicos[i].crm +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonMedicos){
			console.table(this.jsonMedicos);
			console.log(event.target.value);

			if(this.jsonMedicos[i].nome.search(regex) != -1 || this.jsonMedicos[i].cpf.search(regex)  != -1||this.jsonMedicos[i].crm.search(regex)  != -1){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonMedicos[i].nome +' </td><td> '+ this.jsonMedicos[i].cpf +' </td><td> '+ this.jsonMedicos[i].crm +' </td>'; 
			}

		}
		this.html = busca;
	}
}
