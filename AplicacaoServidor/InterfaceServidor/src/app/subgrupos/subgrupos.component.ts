import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SubgrupoService } from '../../services/subgrupo.service';

@Component({
	selector: 'app-subgrupos',
	templateUrl: './subgrupos.component.html',
	styleUrls: ['./subgrupos.component.css']
})
export class SubgruposComponent implements OnInit {

	subgrupos:any;
	html:string;

	constructor(public sideNav:SidenavComponent, private subgrupoService:SubgrupoService) { }

	async ngOnInit() {
		this.sideNav.activeView="Subgrupos";
		this.subgrupos = await this.subgrupoService.listaDeSubgrupo();
		this.html = this.popularTabela();
	}

	popularTabela(){
		let i = 0;
		var html = this.subgrupos.map( subgrupo => {
			return '<tr data-codigo='+ subgrupo.codSubgrupo +'><th scope="row"> '+ (++i) +' </th><td> '+ subgrupo.nome +' </td><td> '+ subgrupo.codFuncao +' </td></tr>';
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');
		
		var busca = this.subgrupos.filter( subgrupo => {
			return subgrupo.nome.match(regex) || subgrupo.codFuncao.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( subgrupo => {
			return '<tr data-codigo='+ subgrupo.codSubgrupo +'><th scope="row"> '+ (++i) +' </th><td> '+ subgrupo.nome +' </td><td> '+ subgrupo.codFuncao +' </td></tr>';
		}).join('');
	}
}
