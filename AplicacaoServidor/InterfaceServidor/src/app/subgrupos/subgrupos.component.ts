import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SubgrupoService } from '../services/subgrupo/subgrupo.service';

@Component({
	selector: 'app-subgrupos',
	templateUrl: './subgrupos.component.html',
	styleUrls: ['./subgrupos.component.css']
})
export class SubgruposComponent implements OnInit {

	subgrupos=[];
	dataInput:string;

	constructor(public sideNav:SidenavComponent, private subgrupoService:SubgrupoService) { }

	ngOnInit() {
		this.sideNav.activeView="Subgrupos";
		this.popularTabela();
	}
	popularTabela(){
		this.subgrupoService.listaDeSubgrupo().subscribe(subgrupos=>{
			for(let subgrupo of subgrupos){
				this.subgrupos.push(subgrupo);
			}
		})
	}

}
