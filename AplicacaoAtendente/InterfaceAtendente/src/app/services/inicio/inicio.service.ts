import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }

  private updateInicio=new BehaviorSubject('default message');
  currentInicio=this.updateInicio.asObservable();

  updateTabelaInicio(message){
    this.updateInicio.next(message);
  }

}
