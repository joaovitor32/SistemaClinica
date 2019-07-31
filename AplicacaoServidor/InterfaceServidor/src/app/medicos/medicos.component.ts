import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-medicos',
	templateUrl: './medicos.component.html',
	styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Médicos";
	}

}
