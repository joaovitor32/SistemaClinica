import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AtividadeService } from '../services/atividade/atividade.service';

@Component({
	selector: 'app-atividades',
	templateUrl: './atividades.component.html',
	styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

	atividades=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent, private atividadeService:AtividadeService) { }

	ngOnInit() {
		this.sideNav.activeView="Atividades";
		this.popularTabela();
	}
	popularTabela(){
		this.atividadeService.listaDeAtividades().subscribe(atividades=>{
			for(let atividade of atividades) {
				this.atividades.push(atividade)
			  }
			}
		);
	} 
}
	

