import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-pacientes',
	templateUrl: './pacientes.component.html',
	styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

	jsonPacientes:JSON=JSON.parse('[{"nome":"Serra Jr.","cpf":"75.997.418/0001-53"},{"nome":"Coca Cola","cpf":"76.997.418/0001-53"},{"nome":"Nova FAOL","cpf":"77.997.418/0001-53"},{"nome":"Viação 1001","cpf":"78.997.418/0001-53"}]');
	html:string;

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.html=this.popularTabela();
		this.sideNav.activeView="Pacientes";
	}
	popularTabela(){
		var html = '';
		for(let i in this.jsonPacientes){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonPacientes[i].nome +' </td><td> '+ this.jsonPacientes[i].cpf +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonPacientes){
			console.table(this.jsonPacientes);
			console.log(event.target.value);

			if(this.jsonPacientes[i].nome.search(regex) != -1 || this.jsonPacientes[i].cpf.search(regex)  != -1){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonPacientes[i].nome +' </td><td> '+ this.jsonPacientes[i].cpf +' </td></tr>'; 
			}

		}
		this.html = busca;
	}
}
