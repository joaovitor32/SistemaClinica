import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tipoestado} from '../tipoestado/tipoestado';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoestadoService {

	//url="http://localhost/SistemaClinica/AplicacaoServidor/api/routes/tipo_estado" 
  url="/api/routes/tipo_consulta";
  constructor(
    private http:HttpClient,
  ) { }

  listaDeTipoEstado():Observable<tipoestado[]>{
    return this.http.get<tipoestado[]>(this.url,{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
}
