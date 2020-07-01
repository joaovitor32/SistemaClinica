import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeExameService {

	url:string 

	constructor(private http:HttpClient) { 
		const host = localStorage.getItem("host");

		//this.url='http://localhost:8080/api/routes/'
		this.url=`http://${host}/api/route/`

	}

	cadastrarExameAtividade(atividade,exames) {
		return this.http.post(this.url+"atividade_exame/new.php", {
			"atividade": atividade,
			"exames": exames
		});
	}
}
