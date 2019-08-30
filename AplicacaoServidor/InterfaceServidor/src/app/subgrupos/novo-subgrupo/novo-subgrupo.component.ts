import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
	selector: 'app-novo-subgrupo',
	templateUrl: './novo-subgrupo.component.html',
	styleUrls: ['./novo-subgrupo.component.css']
})
export class NovoSubgrupoComponent implements OnInit {

	constructor(public sideNav: SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView = "Subgrupos > Novo Subgrupo";
	}

}
