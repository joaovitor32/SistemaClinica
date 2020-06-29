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
		this.url=`http://${host}/api/routes/atividade_exame`
	}

	cadastrarExameAtividade(atividade,exames) {
		return this.http.post(this.url+"/new.php", {
			"atividade": atividade,
			"exames": exames
		});
	}
}
