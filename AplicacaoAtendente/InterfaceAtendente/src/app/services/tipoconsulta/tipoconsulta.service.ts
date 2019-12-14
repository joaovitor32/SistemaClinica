import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tipoconsulta} from '../tipoconsulta/tipoconsulta';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoconsultaService {

  url="http://localhost:8080/SistemaClinica/AplicacaoServidor/api/routes/tipo_consulta";
  //url="/api/routes/tipo_consulta";
  constructor(
    private http:HttpClient,
  ) { }

  listaDeTipoConsultas():Observable<tipoconsulta[]>{
    return this.http.get<tipoconsulta[]>(this.url,{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
}
