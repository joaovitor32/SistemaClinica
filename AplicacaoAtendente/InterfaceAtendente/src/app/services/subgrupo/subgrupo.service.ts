import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { subgrupo } from './subgrupo'

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

	//url="http://localhost/SistemaClinica/AplicacaoServidor/api/routes/subgrupo" 
	url="/api/routes/subgrupo";

	constructor(private http:HttpClient) { }

	listaDeSubgrupo():Observable<subgrupo[]>{	
		return this.http.get<subgrupo[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerSubgrupo(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
	}

	cadastrarSubgrupo(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome": dados.nome,
			"codFuncao": dados.funcao
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	atualizarSubgrupo(dados):Observable<subgrupo[]>{
		
		return this.http.post<subgrupo[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"codFuncao": dados.funcao
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarSubgrupo(id):Observable<subgrupo[]>{

		return this.http.post<subgrupo[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
