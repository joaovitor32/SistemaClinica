import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-atividades',
	templateUrl: './atividades.component.html',
	styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

	jsonAtividades:JSON=JSON.parse('[{"nome":"pedreiro","descricao":"carregar tijolo"},{"nome":"motorista","descricao":"dirigir onibus"}]');
	html:string;

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Atividades";
		this.html=this.popularTabela();
	}
	
	popularTabela(){
		var html = '';
		for(let i in this.jsonAtividades){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonAtividades[i].nome +' </td><td> '+ this.jsonAtividades[i].descricao +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonAtividades){
			console.table(this.jsonAtividades);
			console.log(event.target.value);

			if(this.jsonAtividades[i].nome.search(regex) != -1 || this.jsonAtividades[i].descricao.search(regex)  != -1){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonAtividades[i].nome +' </td><td> '+ this.jsonAtividades[i].descricao +' </td></tr>'; 
			}

		}
		this.html = busca;
	}

}
