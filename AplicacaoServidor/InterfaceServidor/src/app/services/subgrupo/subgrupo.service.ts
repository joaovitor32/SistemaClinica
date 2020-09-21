import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { subgrupo } from './subgrupo'

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

	url:string 

	constructor(private http:HttpClient) {
		const host = localStorage.getItem("host");
		//this.url='http://localhost:8080/api/routes'
		this.url = `http://${host}/api/routes`;
	}

	listaDeSubgrupo():Observable<subgrupo[]>{	
		return this.http.get<subgrupo[]>(this.url+'/subgrupo/index.php');
	}

	lerSubgrupo(id){
		return this.http.get(this.url+"/subgrupo/read.php", {
			headers : {
				'_id':String(id)
			}
		});
	}

	cadastrarSubgrupo(dados) {
		return this.http.post(this.url+"/subgrupo/new.php", {
			"nome": dados.nome,
			"codFuncao": dados.funcao.codFuncao
		});
	}

	atualizarSubgrupo(dados):Observable<subgrupo[]>{
		
		return this.http.post<subgrupo[]>(this.url+"/subgrupo/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"codFuncao": dados.funcao.codFuncao,
		});
	}

	deletarSubgrupo(id):Observable<subgrupo[]>{

		return this.http.post<subgrupo[]>(this.url+"/subgrupo/delete.php", {
			"_id" : String(id)
		});
	}
}
