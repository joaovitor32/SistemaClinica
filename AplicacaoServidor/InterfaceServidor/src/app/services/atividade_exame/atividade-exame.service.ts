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
<<<<<<< HEAD
		this.url='http://localhost:8080/api/routes/'
		// /this.url=`http://${host}/api/route/atividade_exame/`
=======
		this.url=`http://${host}/api/routes/atividade_exame`
>>>>>>> a984a896e42a3cf8c367580b489a4ba4175aa917
	}

	cadastrarExameAtividade(atividade,exames) {
		return this.http.post(this.url+"atividade_exame/new.php", {
			"atividade": atividade,
			"exames": exames
		});
	}
}
