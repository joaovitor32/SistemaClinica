import { Component, OnInit } from '@angular/core';
import { MatSidenavModule, MatListModule } from  '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened:boolean = true;
	activeView:string;

	constructor() { }

	ngOnInit() {
	}
	
	toggle(){
		this.opened = !this.opened;
	}
}
