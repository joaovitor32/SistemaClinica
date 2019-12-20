import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url="/api/routes/consulta"

  constructor(private http:HttpClient) { }
  
  consultasPorMedico(codMedico):Observable<any[]>{
    return this.http.post<any[]>(this.url+"/readByCodMedico.php",{
      "codMedico":codMedico
    },
    {
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  readConsulta(codConsulta):Observable<any[]>{
    return this.http.post<any[]>(this.url+'/read.php',{
      "codConsulta":codConsulta,
    },
    {
        headers : {
				  'db_user' : 'servidorLabmed',
				  'db_password' : 'labmed2019'
			}
    })
  }
}
