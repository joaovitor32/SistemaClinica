import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

	//url ='http://localhost/SistemaClinica/AplicacaoServidor/api/routes/medico';
	url:string
	constructor(private http:HttpClient) { 
		const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/medico`;
	}

	listaDeMedicos():Observable<medico[]>{
		return this.http.get<medico[]>(this.url);
	}

	lerMedico(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
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
		});
	}

	atualizarMedico(dados):Observable<medico[]>{
		
		return this.http.post<medico[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"cpf": dados.cpf,
			"crm": dados.crm,
			"especialidades": dados.especialidades
		});
	}

	deletarMedico(id):Observable<medico[]>{

		return this.http.post<medico[]>(this.url+"/delete.php", {
			"_id" : String(id)
		});
	}
}
