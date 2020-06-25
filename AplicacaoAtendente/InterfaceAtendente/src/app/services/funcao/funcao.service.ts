import { Injectable } from '@angular/core';
import {funcao} from './funcao';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class FuncaoService {

	//url = 'http://localhost/SistemaClinica/AplicacaoServidor/api/routes/funcao';
	url:string

	constructor(private http:HttpClient) {
		const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/funcao`;
	}

	listaDeFuncoes():Observable<funcao[]>{
		return this.http.get<funcao[]>(this.url);
	}

	lerFuncao(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'_id':String(id),
			},
		});
	}

	cadastrarFuncao(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"setor" : dados.setor,
		});
	}

	atualizarFuncao(dados):Observable<funcao[]>{
		
		return this.http.post<funcao[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"setor" : dados.setor,
			"descricao" : dados.descricao,
		});
	}

	deletarFuncao(id):Observable<funcao[]>{

		return this.http.post<funcao[]>(this.url+"/delete.php", {
			"_id" : String(id)
		});
	}

}


