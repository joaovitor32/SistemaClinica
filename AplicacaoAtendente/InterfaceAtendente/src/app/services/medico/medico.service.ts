import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

	url ='http://localhost/SistemaClinica/AplicacaoServidor/api/routes/medico';
	//url="/api/routes/medico";

	constructor(private http:HttpClient) { }

	listaDeMedicos():Observable<medico[]>{
		return this.http.get<medico[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerMedico(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
	}

	cadastrarMedico(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome": dados.nome,
			"cpf": dados.cpf,
			"crm": dados.crm,
			"especialidades": dados.especialidades
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	atualizarMedico(dados):Observable<medico[]>{
		
		return this.http.post<medico[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"cpf": dados.cpf,
			"crm": dados.crm,
			"especialidades": dados.especialidades
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarMedico(id):Observable<medico[]>{

		return this.http.post<medico[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
