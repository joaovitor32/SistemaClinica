import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NovaEmpresaService {

  constructor() { }

  private updateEmpresas=new BehaviorSubject('default message');
  currentEmpresas=this.updateEmpresas.asObservable();

  updateTabelaEmpresas(message){
    this.updateEmpresas.next(message);
  }

}
