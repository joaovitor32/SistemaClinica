import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {exames} from './exame';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  url  ='/api/routes/exame'

  constructor(private http:HttpClient) { }

  listaDeExames():Observable<exames[]>{
		return this.http.get<exames[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
