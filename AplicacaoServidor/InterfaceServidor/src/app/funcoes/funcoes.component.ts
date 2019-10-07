import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FuncaoService } from '../services/funcao/funcao.service';

@Component({
	selector: 'app-funcoes',
	templateUrl: './funcoes.component.html',
	styleUrls: ['./funcoes.component.css']
})
export class FuncoesComponent implements OnInit {

	funcoes=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent, private funcaoService:FuncaoService) { }

	ngOnInit() {
		this.sideNav.activeView="Funcoes";
		this.popularTabela();
	}
	popularTabela(){
		this.funcaoService.listaDeFuncoes().subscribe(funcoes=>{
			for(let funcao of funcoes) {
				this.funcoes.push(funcao)
			  }
			}
		);
	} 
}
