import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { atividades } from './atividades';


@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

	url:string;

	constructor(private http:HttpClient) {
		const host = localStorage.getItem("host");
		this.url='http://localhost:8080/api/routes'
        //this.url = `http://${host}/api/routes`;
	 }

	listaDeAtividades():Observable<atividades[]>{
		return this.http.get<atividades[]>(this.url+"/atividade/index.php");
	}

	lerAtividade(id){
		return this.http.get(this.url+"/atividade/read.php", {
			headers : {
				'_id':String(id)
			}
		});
	}

	cadastrarAtividade(dados) {
		return this.http.post(this.url+"/atividade/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao
		});
	}

	atualizarAtividade(dados):Observable<atividades[]>{
		
		return this.http.post<atividades[]>(this.url+"/atividade/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"descricao" : dados.descricao
		});
	}

	deletarAtividade(id):Observable<atividades[]>{

		return this.http.post<atividades[]>(this.url+"/atividade/delete.php", {
			"_id" : String(id)
		});
	}
}
