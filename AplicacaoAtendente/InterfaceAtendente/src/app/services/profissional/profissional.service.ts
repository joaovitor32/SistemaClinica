import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { profissional } from './profissional';

@Injectable({
  providedIn: 'root'
})
export class profissionalService {

	url ='http://localhost/SistemaClinica/AplicacaoServidor/api/routes/profissional';
	// url="/api/routes/profissional";

	constructor(private http:HttpClient) { }

	listaDeProfissionais():Observable<profissional[]>{
		return this.http.get<profissional[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerProfissional(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
	}

	CadastrarProfissional(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome": dados.nome,
			"cpf": dados.cpf,
			"identificacao": dados.identificacao,
			"especialidades": dados.especialidades
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	AtualizarProfissional(dados):Observable<profissional[]>{
		
		return this.http.post<profissional[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"cpf": dados.cpf,
			"crm": dados.identificacao,
			"especialidades": dados.especialidades
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	DeletarProfissional(id):Observable<profissional[]>{

		return this.http.post<profissional[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
