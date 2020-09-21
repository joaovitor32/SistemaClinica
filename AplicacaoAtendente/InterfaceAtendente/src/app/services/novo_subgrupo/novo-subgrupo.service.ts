import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NovoSubgrupoService {

  constructor() { }

  private updateSubgrupos=new BehaviorSubject('default message');
  currentSubgrupos=this.updateSubgrupos.asObservable();

  updateTabelaSubgrupos(message){
    this.updateSubgrupos.next(message);
  }

}
