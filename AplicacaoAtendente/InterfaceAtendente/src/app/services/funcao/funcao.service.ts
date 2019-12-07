import { Injectable } from '@angular/core';
import {funcao} from './funcao';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class FuncaoService {

	url = 'http://localhost/SistemaClinica/AplicacaoServidor/api/routes/funcao';

	constructor(private http:HttpClient) { }

	listaDeFuncoes():Observable<funcao[]>{
		return this.http.get<funcao[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019',
			},
		});
	}

	lerFuncao(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id),
			},
		});
	}

	cadastrarFuncao(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"setor" : dados.setor,
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			},
		});
	}

	atualizarFuncao(dados):Observable<funcao[]>{
		
		return this.http.post<funcao[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"setor" : dados.setor,
			"descricao" : dados.descricao,
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarFuncao(id):Observable<funcao[]>{

		return this.http.post<funcao[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

}


