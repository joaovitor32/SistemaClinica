import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'
import{empresas} from './empresas';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url="/api/routes/empresa/";

  constructor(private http:HttpClient) {
  
  }

  listaDeEmpresas():Observable<empresas[]>{ 
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"X-Requested-With,content-type",
        "Access-Control-Allow-Methods":"GET,POST",
        "Content-type":"application/json"
      })
    }
    return this.http.post<empresas[]>(this.url+"index.php",null,httpOptions);
  }
}
 