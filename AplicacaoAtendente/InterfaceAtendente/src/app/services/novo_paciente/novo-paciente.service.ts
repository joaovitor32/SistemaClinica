import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NovoPacienteService {

  constructor() { }

  private updatePacientes=new BehaviorSubject('default message');
  currentNovoPaciente=this.updatePacientes.asObservable();
  
  updateTabelaPaciente(message){
    this.updatePacientes.next(message);
  }
}
