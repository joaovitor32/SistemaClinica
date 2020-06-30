import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubgrupoAtividadeService {

	url:string;

	constructor(private http:HttpClient) { 
		const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/subgrupo_atividade`;
	}

	cadastrarSubgrupo(subgrupo,atividades) {
		return this.http.post(this.url+"/new.php", {
			"subgrupo": subgrupo,
			"atividades": atividades
		});
	}
}
