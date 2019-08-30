import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ExameService } from '../../services/exame.service';

@Component({
	selector: 'app-exames',
	templateUrl: './exames.component.html',
	styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

	exames:any;
	html:string;

	constructor(public sideNav:SidenavComponent, private exameService:ExameService) { }

	async ngOnInit() {
		this.sideNav.activeView = "Exames";
		this.exames = await this.exameService.listaDeExames();
		this.html = this.popularTabela();
	}
	
	popularTabela(){
		let i = 0;
		var html = this.exames.map( exame => {
			return '<tr data-codigo='+ exame.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ exame.nome +' </td><td> '+ exame.descricao +' </td><td> R$ '+ exame.preco +' </td></tr>'
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.exames.filter( exame => {
			return exame.nome.match(regex) || exame.descricao.match(regex) || exame.preco.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( exame => {
			return '<tr data-codigo='+ exame.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ exame.nome +' </td><td> '+ exame.descricao +' </td><td> R$ '+ exame.preco +' </td></tr>'
		}).join('');
	}
}
