import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaExameProfissionalService {

  url:string
  constructor(private http:HttpClient) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/consulta_exame_profissional/`;
  }

  alocarProfissionalExame(consulta,exames):Observable<any>{  
    return  this.http.post<any>(this.url+"new.php",{
      "consulta":consulta,
      "exames":exames
    })
  }
  readConsultaExames(codConsulta):Observable<any>{  
    return  this.http.get<any>(this.url+"read.php",{
      headers : {
        "campo_principal":"codConsulta",
        "codigo":codConsulta,
			}
    })
  }

}
