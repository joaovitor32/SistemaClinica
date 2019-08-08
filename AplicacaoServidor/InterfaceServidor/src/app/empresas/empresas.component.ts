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


	jsonEmpresas:IEmpresa[];
	html:string;

	ngOnInit() {
		this.sideNav.activeView="Empresas";
		this.dadosEmpresas();
		this.html = this.popularTabela();
	}
	dadosEmpresas(){
		this.empresaService.obterEmpresas().subscribe(
			data=>{console.log(data)}
		);
	}
	popularTabela(){
		var html = '';
		for(let i in this.jsonEmpresas){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonEmpresas[i].nome +' </td><td> '+ this.jsonEmpresas[i].cnpj +' </td><td> '+ this.jsonEmpresas[i].telefone +' </td><td> '+ this.jsonEmpresas[i].tipoPgto +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonEmpresas){
			console.table(this.jsonEmpresas[i]);
			console.log(event.target.value);
			console.log(this.jsonEmpresas[i].telefone.search(regex))

			if(this.jsonEmpresas[i].nome.search(regex) != -1 || this.jsonEmpresas[i].cnpj.search(regex)  != -1  || this.jsonEmpresas[i].telefone.search(regex)  != -1 ){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonEmpresas[i].nome +' </td><td> '+ this.jsonEmpresas[i].cnpj +' </td><td> '+ this.jsonEmpresas[i].telefone +' </td><td> '+ this.jsonEmpresas[i].tipoPgto +' </td></tr>'; 
			}
				
		}
		this.html = busca;
	}
}
