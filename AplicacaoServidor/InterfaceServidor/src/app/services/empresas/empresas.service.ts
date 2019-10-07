import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { empresas } from './empresas';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmpresasService {

	url = "/api/routes/empresa";

	constructor(private http:HttpClient) {

	}

	listaDeEmpresas():Observable<empresas[]>{
		return this.http.get<empresas[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	lerEmpresa(id):Observable<empresas[]>{
		return this.http.get<empresas[]>(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
	}

	cadastrarEmpresa(dados):Observable<empresas[]>{

		return this.http.post<empresas[]>(this.url+"/new.php", {
			"nome" : dados.nome,
			"cnpj" : dados.cnpj,
			"telefone1" : dados.telefone1,
			"telefone2" : dados.telefone2,
			"tipoPgto" : dados.tipoPgto,
			"rua" : dados.rua,
			"numero" : dados.numero,
			"bairro" : dados.bairro,
			"cidade" : dados.cidade,
			"estado" : dados.estado,
			"cep" : dados.cep
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	atualizarEmpresa(dados):Observable<empresas[]>{

		return this.http.post<empresas[]>(this.url+"/update.php", {
			"_id" : dados._id,
			"nome" : dados.nome,
			"cnpj" : dados.cnpj,
			"telefone1" : dados.telefone1,
			"telefone2" : dados.telefone2,
			"tipoPgto" : dados.tipoPgto,
			"rua" : dados.rua,
			"numero" : dados.numero,
			"bairro" : dados.bairro,
			"cidade" : dados.cidade,
			"estado" : dados.estado,
			"cep" : dados.cep
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}

	deletarEmpresa(dados):Observable<empresas[]>{

		return this.http.post<empresas[]>(this.url+"/delete.php", {
			"_id" : dados._id
		}, {
			headers:{
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}