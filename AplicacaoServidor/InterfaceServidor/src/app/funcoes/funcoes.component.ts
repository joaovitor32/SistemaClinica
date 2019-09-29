import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { FuncaoService } from '../services/funcao/funcao.service';

@Component({
	selector: 'app-funcoes',
	templateUrl: './funcoes.component.html',
	styleUrls: ['./funcoes.component.css']
})
export class FuncoesComponent implements OnInit {

	funcoes:any;
	html:string;
	
	constructor(public sideNav:SidenavComponent, private funcaoService:FuncaoService) { }

	async ngOnInit() {
		this.sideNav.activeView="Funções";
		this.funcoes = await this.funcaoService.listaDeFuncoes();
		this.html = this.popularTabela();
	}

	popularTabela(){
		let i = 0;
		var html = this.funcoes.map( funcao => {
			return '<tr data-codigo='+ funcao.codFuncao +'><th scope="row"> '+ (++i) +' </th><td> '+ funcao.nome +' </td><td> '+ funcao.descricao +'</tr>';
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.funcoes.filter( funcao => {
			return funcao.nome.match(regex) || funcao.descricao.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( funcao => {
			return '<tr data-codigo='+ funcao.codFuncao +'><th scope="row"> '+ (++i) +' </th><td> '+ funcao.nome +' </td><td> '+ funcao.descricao +'</tr>';
		}).join('');
	}

}
