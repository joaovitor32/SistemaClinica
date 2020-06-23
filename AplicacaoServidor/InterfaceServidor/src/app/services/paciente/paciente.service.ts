import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { paciente } from './paciente'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	url:string

	constructor(private http:HttpClient){
		const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/paciente/`;
	}

	listaDePacientes():Observable<paciente[]>{
		return this.http.get<paciente[]>(this.url);
	}

	lerPaciente(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'_id':String(id)
			}
		});
	}

	cadastrarPaciente(dados) {
		return this.http.post(this.url+"/new.php", {
			"nome": dados.nome,
			"cpf": dados.cpf,
			"rg": dados.rg,
			"sexo": dados.sexo,
			"nascimento": dados.dataNascimento,
		});
	}

	atualizarPaciente(dados):Observable<paciente[]>{
		
		return this.http.post<paciente[]>(this.url+"/update.php", {
			"_id" : dados.codigo,
			"nome": dados.nome,
			"cpf": dados.cpf,
			"rg": dados.rg,
			"sexo": dados.sexo,
			"nascimento": dados.nascimento,
		});
	}

	deletarPaciente(id):Observable<paciente[]>{

		return this.http.post<paciente[]>(this.url+"/delete.php", {
			"_id" : String(id)
		});
	}
}
