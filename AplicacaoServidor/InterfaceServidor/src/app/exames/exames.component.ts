import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-exames',
	templateUrl: './exames.component.html',
	styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Exames";
	}

}
