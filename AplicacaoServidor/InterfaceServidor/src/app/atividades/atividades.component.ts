import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-atividades',
	templateUrl: './atividades.component.html',
	styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Atividades";
	}

}
