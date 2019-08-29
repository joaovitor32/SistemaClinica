import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-nova-funcao',
	templateUrl: './nova-funcao.component.html',
	styleUrls: ['./nova-funcao.component.css']
})
export class NovaFuncaoComponent implements OnInit {

constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Funções > Nova Função";
	}

}
