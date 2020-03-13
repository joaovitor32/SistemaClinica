import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TipoConsultaService {

  url="/api/routes/tipo_consulta/";

  constructor(
    private http:HttpClient
  ) { }

  listaDeTipoConsultas():Observable<any[]>{
    return this.http.get<any[]>(this.url+'index.php',{
      headers:{
        'db_user':'servidor_labmed',
        'db_password':'labmed2019'
      }
    })
  }

}
