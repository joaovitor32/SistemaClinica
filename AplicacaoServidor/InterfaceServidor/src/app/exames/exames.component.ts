import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-exames',
	templateUrl: './exames.component.html',
	styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

	jsonExames:JSON=JSON.parse('[{"nome":"Audiometria","descricao":"nao faco ideia","preco":"800"}]');
	html:string;

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Exames";
		this.html=this.popularTabela();
	}
	
	popularTabela(){
		var html = '';
		for(let i in this.jsonExames){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonExames[i].nome +' </td><td> '+ this.jsonExames[i].descricao +' </td><td> '+ this.jsonExames[i].preco +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonExames){
			console.table(this.jsonExames);
			console.log(event.target.value);

			if(this.jsonExames[i].nome.search(regex) != -1 || this.jsonExames[i].descricao.search(regex)  != -1||this.jsonExames[i].preco.search(regex)  != -1){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonExames[i].nome +' </td><td> '+ this.jsonExames[i].descricao +' </td><td> '+ this.jsonExames[i].preco +' </td>'; 
			}
		}
		this.html = busca;
	}

}
