import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncaoExameService {

	url:string

	constructor(private http:HttpClient) { 
		const host = localStorage.getItem("host");
		//this.url='http://localhost:8080/api/routes'
        this.url = `http://${host}/api/routes`;
	}

	cadastrarFuncaoExame(funcao,exames) {
		return this.http.post(this.url+"/funcao_exame/new.php", {
			"funcao": funcao,
			"exames": exames
		});
	}

	readFuncaoExame(funcao) {
		return this.http.get(this.url+"/funcao_exame/read.php", {
			headers : {
				'_id':String(funcao)
			}
		});
	}
}