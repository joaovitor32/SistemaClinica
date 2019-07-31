import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-pacientes',
	templateUrl: './pacientes.component.html',
	styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Pacientes";
	}

}
