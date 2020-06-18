import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaExameProfissionalService {

  constructor(private http:HttpClient) { }

  url="/api/routes/consulta_exame_profissional/";

  alocarProfissionalExame(consulta,exames):Observable<any>{  
    return  this.http.post<any>(this.url+"new.php",{
      "consulta":consulta,
      "exames":exames
    },{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  readConsultaExames(codConsulta):Observable<any>{  
    return  this.http.get<any>(this.url+"read.php",{
      headers : {
				'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
        "campo_principal":"codConsulta",
        "codigo":codConsulta,
			}
    })
  }

}
