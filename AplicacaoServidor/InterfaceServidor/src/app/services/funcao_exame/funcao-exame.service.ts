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
        this.url = `http://${host}/api/routes/funcao_exame`;
	}

	cadastrarFuncaoExame(funcao,exames) {
		return this.http.post(this.url+"/new.php", {
			"funcao": funcao,
			"exames": exames
		});
	}
}