import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { exame } from './exame'

@Injectable({
  providedIn: 'root'
})
export class ExameService {

	url='/api/routes/exame/';

	constructor(private http:HttpClient) { }

	listaDeExames():Observable<exame[]>{
		return this.http.get<exame[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerExame(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
	}

	cadastrarExame(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"preco": dados.preco,
			"codigo": dados.codigo
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	atualizarExame(dados):Observable<exame[]>{
		
		return this.http.post<exame[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"codigo" : dados.codigo_exame,
			"preco" : dados.preco
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarExame(id):Observable<exame[]>{

		return this.http.post<exame[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
