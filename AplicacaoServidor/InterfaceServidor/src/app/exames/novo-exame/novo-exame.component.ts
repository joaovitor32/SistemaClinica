import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-novo-exame',
	templateUrl: './novo-exame.component.html',
	styleUrls: ['./novo-exame.component.css']
})
export class NovoExameComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView = "Exames > Novo Exame";
	}

}
