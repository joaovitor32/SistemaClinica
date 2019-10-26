import { Injectable } from '@angular/core';
import {subgrupo} from './subgrupo';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

  url="/api/routes/subgrupo"

  constructor(private http:HttpClient) { }
  listaDeSubGrupos(){
		return this.http.get<subgrupo[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
