import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { paciente } from './paciente'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	url='http://localhost/SistemaClinica/AplicacaoServidor/api/routes/paciente'

	constructor(private http:HttpClient){}

	listaDePacientes():Observable<paciente[]>{
		return this.http.get<paciente[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerPaciente(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
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
			"nascimento": dados.nascimento,
			"codEmpresa": dados.empresa,
			"codFuncao": dados.funcao,
			"codSubgrupo": dados.subgrupo,
			"inicio": dados.inicio,
			"termino": dados.termino
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
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
			"codEmpresa": dados.empresa,
			"codFuncao": dados.funcao,
			"codSubgrupo": dados.subgrupo,
			"inicio": dados.inicio,
			"termino": dados.termino
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarPaciente(id):Observable<paciente[]>{

		return this.http.post<paciente[]>(this.url+"/delete.php", {
			"_id" : String(id)
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
