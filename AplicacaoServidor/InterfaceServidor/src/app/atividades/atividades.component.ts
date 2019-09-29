import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AtividadeService } from '../services/atividade/atividade.service';

@Component({
	selector: 'app-atividades',
	templateUrl: './atividades.component.html',
	styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

	atividades:any;
	html:string;

	constructor(public sideNav:SidenavComponent, private atividadeService:AtividadeService) { }

	async ngOnInit() {
		this.sideNav.activeView="Atividades";
		this.atividades = await this.atividadeService.listaDeAtividades();
		this.html = this.popularTabela();
	}
	
	popularTabela(){
		let i = 0;
		var html = this.atividades.map( atividade => {
			return '<tr data-codigo='+ atividade.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ atividade.nome +' </td><td> '+ atividade.descricao +' </td></tr>';
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.atividades.filter( atividade => {
			return atividade.nome.match(regex) || atividade.descricao.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( atividade => {
			return '<tr data-codigo='+ atividade.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ atividade.nome +' </td><td> '+ atividade.descricao +' </td></tr>';
		}).join('');
	}

}
