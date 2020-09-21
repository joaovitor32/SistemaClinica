import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class NovaFuncaoService {

  constructor() { }

  private updateFuncoes=new BehaviorSubject('default message');
  currentFuncoes=this.updateFuncoes.asObservable();

  updateTabelaFuncoes(message){
    this.updateFuncoes.next(message);
  }

}
