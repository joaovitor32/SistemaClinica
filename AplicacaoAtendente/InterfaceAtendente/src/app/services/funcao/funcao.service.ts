import { Injectable } from '@angular/core';
import {funcao} from './funcao';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

  url = '/api/routes/funcao';

  constructor(private http:HttpClient) { }

  listaDeFuncoes(){
		return this.http.get<funcao[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
}
