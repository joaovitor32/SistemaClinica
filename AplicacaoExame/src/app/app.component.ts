import { Component, OnInit } from "@angular/core";
import {SocketService} from '../app/services/socket.service';
import { ReloadService } from './services/reload.service';
import { BROADCAST, REALOAD_SIDENAV } from './constants';


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "AplicacaoExame";

    constructor(
        private socketService:SocketService,
        private reloadService:ReloadService,
    ){};

    ngOnInit(){
        this.socketService.listen("broadcast").subscribe(data=>{
            if(data==BROADCAST){
                this.reloadService.updateTabelaSidenav(REALOAD_SIDENAV);
            }
        })
    }
}
