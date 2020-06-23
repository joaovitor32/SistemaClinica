import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaRisco} from './categoriarisco'

@Injectable({
  providedIn: 'root'
})
export class CategoriaRiscoService {

  url: string;

  constructor(
    private http:HttpClient
  ) { 
    const host = localStorage.getItem("host");
    this.url=`http://${host}/api/routes/categoria_risco/`
  }
  
  listaCategoriaRisco():Observable<CategoriaRisco[]>{
    return this.http.get<CategoriaRisco[]>(this.url+'index.php')
  }
}
