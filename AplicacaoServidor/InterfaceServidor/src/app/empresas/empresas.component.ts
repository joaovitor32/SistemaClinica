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
		var html = this.empresas.map( empresa => {
			console.log(empresa);
			return '<tr data-codigo='+ empresa.codEmpresa +'><th scope="row"> '+ empresa.codEmpresa +' </th><td> '+ empresa.nome +' </td><td> '+ empresa.cnpj +' </td><td> '+ empresa.telefone +' </td><td> '+ (empresa.tipoPgto == 1 ? 'Fatura' : 'À vista' ) +' </td></tr>'
		}).join('');
		
		return html;
	}

	buscaTermo(event){
		var busca = '';
		// const regex = new RegExp(event.target.value, 'gi');
		// for(let i in this.empresas){
		// 	console.table(this.empresas[i]);
		// 	console.log(event.target.value);
		// 	console.log(this.empresas[i].telefone.search(regex))

		// 	if(this.empresas[i].nome.search(regex) != -1 || this.empresas[i].cnpj.search(regex)  != -1  || this.empresas[i].telefone.search(regex)  != -1 ){
		// 		// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
		// 		busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.empresas[i].nome +' </td><td> '+ this.empresas[i].cnpj +' </td><td> '+ this.empresas[i].telefone +' </td><td> '+ this.empresas[i].tipoPgto +' </td></tr>'; 
		// 	}
		// }
		this.html = busca;
	}
}
