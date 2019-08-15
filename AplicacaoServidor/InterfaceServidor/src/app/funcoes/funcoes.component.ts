import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-funcoes',
	templateUrl: './funcoes.component.html',
	styleUrls: ['./funcoes.component.css']
})
export class FuncoesComponent implements OnInit {

	jsonFuncoes:JSON=JSON.parse('[{"nome":"pedreiro","descricao":"carregar tijolo"},{"nome":"motorista","descricao":"dirigir onibus"}]');
	html:string;
	

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Funções";
		this.html=this.popularTabela();
	}

	popularTabela(){
		var html = '';
		for(let i in this.jsonFuncoes){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonFuncoes[i].nome +' </td><td> '+ this.jsonFuncoes[i].descricao+'</td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonFuncoes){
			console.table(this.jsonFuncoes);
			console.log(event.target.value);

			if(this.jsonFuncoes[i].nome.search(regex) != -1 || this.jsonFuncoes[i].descricao.search(regex)  != -1){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonFuncoes[i].nome +' </td><td> '+ this.jsonFuncoes[i].descricao +' </td></tr>'; 
			}

		}
		this.html = busca;
	}

}
