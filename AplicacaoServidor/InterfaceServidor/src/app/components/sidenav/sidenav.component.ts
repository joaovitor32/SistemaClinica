import { Component, Inject, OnInit } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
	
	opened:boolean = true;
	activeView:string;

	constructor(
		@Inject(LOCAL_STORAGE) private storage: StorageService
	) { }

	ngOnInit() {
	}
	
	toggle(){
		this.opened = !this.opened;
	}
	ionViewWillEnter() {
        this.ngOnInit();
    }
}
