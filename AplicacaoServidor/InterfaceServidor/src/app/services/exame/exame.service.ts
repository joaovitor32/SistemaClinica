import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { exame } from './exame'

@Injectable({
  providedIn: 'root'
})
export class ExameService {

	url:string

	constructor(private http:HttpClient) {
		const host = localStorage.getItem("host");
		//this.url='http://localhost:8080/api/routes'
        this.url = `http://${host}/api/routes`;
	 }

	listaDeExames():Observable<exame[]>{
		return this.http.get<exame[]>(this.url+'/exame/index.php');
	}

	lerExame(id){
		return this.http.get(this.url+"/exame/read.php", {
			headers : {

				'_id':String(id)
			}
		});
	}

	cadastrarExame(dados) {
		return this.http.post(this.url+"/exame/new.php", {
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"preco": dados.preco,
			"codigo": dados.codigo
		});
	}

	atualizarExame(dados):Observable<exame[]>{
		
		return this.http.post<exame[]>(this.url+"/exame/update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
			"descricao" : dados.descricao,
			"codigo" : dados.codigo_exame,
			"preco" : dados.preco
		});
	}

	deletarExame(id):Observable<exame[]>{

		return this.http.post<exame[]>(this.url+"/exame/delete.php", {
			"_id" : String(id)
		});
	}
}
