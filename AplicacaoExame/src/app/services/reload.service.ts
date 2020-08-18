import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor() { }

  private updateSidenav=new BehaviorSubject('default message');
  currentSidenav=this.updateSidenav.asObservable();

  updateTabelaSidenav(message){
    this.updateSidenav.next(message);
  }

}
