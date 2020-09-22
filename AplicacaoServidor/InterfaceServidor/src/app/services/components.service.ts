import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  private messageUpdateEspecialidades = new BehaviorSubject("default message");
  currentEspecialidade=this.messageUpdateEspecialidades.asObservable();
  updateTabelaEspecialidades(message){
    this.messageUpdateEspecialidades.next(message);
  }
}