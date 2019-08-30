import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-nova-atividade',
	templateUrl: './nova-atividade.component.html',
	styleUrls: ['./nova-atividade.component.css']
})
export class NovaAtividadeComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Atividades > Nova Atividade";
	}

}
