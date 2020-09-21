import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    private socket;

    constructor(private http:HttpClient) {
        const host = localStorage.getItem('host');
        this.socket=io('ws://localhost:3000');
    }

    listen(eventName:string){
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
