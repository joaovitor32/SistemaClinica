import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-nova-empresa',
	templateUrl: './nova-empresa.component.html',
	styleUrls: ['./nova-empresa.component.css']
})
export class NovaEmpresaComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Empresas > Nova Empresa";
	}

}
