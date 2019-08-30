import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-novo-medico',
	templateUrl: './novo-medico.component.html',
	styleUrls: ['./novo-medico.component.css']
})
export class NovoMedicoComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView = "Médicos > Novo Médico";
	}

}
