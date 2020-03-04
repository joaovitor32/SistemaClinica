import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  url="/api/routes/consulta/";

  constructor(
    private http:HttpClient,
  ) { }

    listaDeConsultas():Observable<any[]>{
      return this.http.get<any[]>(this.url+"index.php",{
        headers:{
          'db_user' : 'servidorLabmed',
				  'db_password' : 'labmed2019'
        }
      })
    }
    lerConsulta(id){
      return this.http.get(this.url+'read.php',{
        headers:{
          'db_user':'servidorLabmed',
				  'db_password':'labmed2019',
				  '_id':String(id)
        }
      })
    }
}
