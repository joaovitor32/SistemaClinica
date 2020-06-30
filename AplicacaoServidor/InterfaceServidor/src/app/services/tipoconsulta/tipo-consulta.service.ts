import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TipoConsultaService {

  url:string

  constructor(
    private http:HttpClient
  ) { 
    const host = localStorage.getItem("host");
    this.url='http://localhost:8080/api/routes'
    //this.url = `http://${host}/api/routes/tipo_consulta/`;
  }

  listaDeTipoConsultas():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/tipo_consulta/index.php')
  }

}
