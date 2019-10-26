import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {empresas } from './empresas';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url  ='/api/routes/empresa'

  constructor(private http:HttpClient) { }

  listaDeEmpresas():Observable<empresas[]>{
		return this.http.get<empresas[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
