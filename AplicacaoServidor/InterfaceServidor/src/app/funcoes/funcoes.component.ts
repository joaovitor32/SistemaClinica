import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-funcoes',
	templateUrl: './funcoes.component.html',
	styleUrls: ['./funcoes.component.css']
})
export class FuncoesComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Funções";
	}

}
