import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ArrayType } from '@angular/compiler';
import { EmpresasService } from './empresas.service';
import {Observable} from 'rxjs'
import { IEmpresa } from './empresas';

@Component({
	selector: 'app-empresas',
	templateUrl: './empresas.component.html',
	styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

	constructor(public sideNav:SidenavComponent,private empresaService:EmpresasService) { }

	// jsonEmpresas:IEmpresa[];
	empresas:any;
	html:string;

	async ngOnInit() {
		this.sideNav.activeView="Empresas";
		await this.dadosEmpresas();
		this.html = this.popularTabela();
		
	}
	async dadosEmpresas(){
		// this.empresaService.obterEmpresas().subscribe(
		// 	data=>{console.log(data)}
		// );
		//Teste sem utilizar controller para popular a tabela de empresas
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Empresa.php')
		  .then(blob => blob.json())
		  .then(data => this.empresas = data);
	}
	popularTabela(){
		let i = 0;
		var html = this.empresas.map( empresa => {
			return '<tr data-codigo='+ empresa.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ empresa.nome +' </td><td> '+ empresa.cnpj +' </td><td> '+ empresa.telefone +' </td><td> '+ (empresa.tipoPgto == 1 ? 'Fatura' : 'À vista' ) +' </td></tr>'
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		const regex = new RegExp(event.target.value, 'gi');

		var busca = this.empresas.filter( empresa => {
			return empresa.nome.match(regex) || empresa.cnpj.match(regex) || empresa.telefone.match(regex);
		});
		this.mostraBusca(busca);
	}

	mostraBusca(resultadoBusca){
		let i =0;
		this.html = resultadoBusca.map( empresa => {
			return '<tr data-codigo='+ empresa.codEmpresa +'><th scope="row"> '+ (++i) +' </th><td> '+ empresa.nome +' </td><td> '+ empresa.cnpj +' </td><td> '+ empresa.telefone +' </td><td> '+ (empresa.tipoPgto == 1 ? 'Fatura' : 'À vista' ) +' </td></tr>'
		}).join('');
	}
}
