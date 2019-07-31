import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
	selector: 'app-subgrupos',
	templateUrl: './subgrupos.component.html',
	styleUrls: ['./subgrupos.component.css']
})
export class SubgruposComponent implements OnInit {

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.sideNav.activeView="Subgrupos";
	}

}
