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
		this.url=`http://${host}/api/routes/`

	}

	cadastrarExameAtividade(atividade,exames) {
		return this.http.post(this.url+"atividade_exame/new.php", {
			"atividade": atividade,
			"exames": exames
		});
	}
	readExameAtividade(atividade) {
		return this.http.get(this.url+"atividade_exame/read.php", {
			headers:{
				'_id':atividade
			}
		});
	}
}
