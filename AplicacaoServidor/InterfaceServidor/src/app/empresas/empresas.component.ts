import { Component, OnInit,Pipe, PipeTransform  } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { EmpresasService } from './../services/empresas/empresas.service';
import{HttpClient, HttpHeaders} from '@angular/common/http'
@Component({
	selector: 'app-empresas',
	templateUrl: './empresas.component.html',
	styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit{

	constructor(public sideNav:SidenavComponent, private empresaService:EmpresasService) { }

	empresas=[];
	dataInput:string;
	
	ngOnInit() {
		this.sideNav.activeView="Empresas";
		this.popularTabela();

		//A função de ler está funcionando, deve ser passado o id como parâmetro
		// this.empresaService.lerEmpresa(id).subscribe(response =>{
		// 	console.log(response)
		// });

		//A função de cadastro está funcionando, deve ser passado um objeto json como parâmetro
		// this.empresaService.cadastrarEmpresa(dados).subscribe(response =>{
		// 	console.log(response)
		// });

		// A função de atualizar está funcionando, deve ser passado um objeto json como parâmetro
		// this.empresaService.atualizarEmpresa(dados).subscribe(response =>{
		// 	console.log(response)
		// });

		// A função de deletar está funcionando, deve ser passado um id como parâmetro
		// this.empresaService.deletarEmpresa(id).subscribe(response =>{
		// 	console.log(response)
		// });
	}
	popularTabela(){
		this.empresaService.listaDeEmpresas().subscribe(empresas =>{
			for(let empresa of empresas) {
				this.empresas.push(empresa)
			  }
			}
		); 
	}
	/*
	Search(){
		let saveEmpresas=this.empresas;
		if(this.dataInput.length!=0){
			const regex = new RegExp(this.dataInput, 'gi');
				this.empresas=this.empresas.filter(res=>{
				return res.nome.match(regex) || res.cnpj.match(regex);
			})
		}else if(this.dataInput.length==0){
			this.ngOnInit();
		}
	} 
	verificaInput(){

	}
	*/
}
