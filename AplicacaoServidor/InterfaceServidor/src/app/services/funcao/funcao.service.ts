import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { funcao } from './funcao';

@Injectable({
	providedIn: 'root'
})

export class FuncaoService {
  
	url:string;
  
	constructor(private http:HttpClient) {
		const host = localStorage.getItem("host");
		//this.url='http://localhost:8080/api/routes'
        this.url = `http://${host}/api/routes`;
	 }

	listaDeFuncoes():Observable<funcao[]>{
		return this.http.get<funcao[]>(this.url+'/funcao/index.php');
	}

	lerFuncao(id){
		return this.http.get(this.url+"/funcao/read.php", {
			headers : {

				'_id':String(id)
			}
		});
	}

	cadastrarFuncao(dados) {
		return this.http.post(this.url+"/funcao/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"setor" : dados.setor
		});
	}

	atualizarFuncao(dados):Observable<funcao[]>{
		
		return this.http.post<funcao[]>(this.url+"/funcao/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"setor" : dados.setor
		});
	}

	deletarFuncao(id):Observable<funcao[]>{

		return this.http.post<funcao[]>(this.url+"/funcao/delete.php", {
			"_id" : String(id)
		});
	}

  }
  
