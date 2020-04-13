import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PreagendarService {

  constructor() { }

  private updateAgendados=new BehaviorSubject('default message');
  currentAgendados=this.updateAgendados.asObservable();

  updateTabelaAgendados(message){
    this.updateAgendados.next(message);
  }

}
