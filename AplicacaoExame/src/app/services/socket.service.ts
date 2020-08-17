import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import  * as io from 'socket.io-client';
import {Observable,Subject} from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class SocketService {

    private socket;

    constructor(private http: HttpClient) {
        this.socket=io('ws://localhost:3000');
    }

    listen(eventName){
        return new Observable(subscribe=>{
            this.socket.on(eventName,(data)=>{
                subscribe.next(data);
            })
        })
    }

    emit(eventName:string,data:any){
        this.socket.emit(eventName,data);
    }

}
