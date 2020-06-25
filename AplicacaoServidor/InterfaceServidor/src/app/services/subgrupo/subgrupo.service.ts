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
		this.url = `http://${host}/api/routes/subgrupo/`;
	}

	listaDeSubgrupo():Observable<subgrupo[]>{	
		return this.http.get<subgrupo[]>(this.url);
	}

	lerSubgrupo(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'_id':String(id)
			}
		});
	}

	cadastrarSubgrupo(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome": dados.nome,
			"codFuncao": dados.funcao
		});
	}

	atualizarSubgrupo(dados):Observable<subgrupo[]>{
		
		return this.http.post<subgrupo[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"codFuncao": dados.funcao,
		});
	}

	deletarSubgrupo(id):Observable<subgrupo[]>{

		return this.http.post<subgrupo[]>(this.url+"/delete.php", {
			"_id" : String(id)
		});
	}
}
