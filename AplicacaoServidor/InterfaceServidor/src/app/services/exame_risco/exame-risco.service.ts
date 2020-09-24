import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RiscoExameService {

  url: string;
  constructor(
    private http:HttpClient,
  ) { 
  const host = localStorage.getItem("host");
  //this.url='http://localhost:8080/api/routes'
	this.url = `http://${host}/api/routes`;
  }

  cadastrarRiscoExame(risco,exame) {
		return this.http.post(this.url+"/risco_exame/new.php", {
			"risco": risco,
			"exames": exame,
			
		});
	}

  readRiscoExame(exame) {
		return this.http.get(this.url+"/risco_exame/read.php", {
			headers : {
				'_id':String(exame)
			}
		});
	}
	
	listaDeRiscos():Observable<any[]>{
		return this.http.get<any[]>(this.url+'/risco_exame/index.php');
	}
}
