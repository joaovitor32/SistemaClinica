import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'
import{atividades} from './atividades';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

	url="/api/routes/atividade/";

	constructor(private http:HttpClient) { }

	listaDeAtividades(){
		const httpOptions = {
			headers: new HttpHeaders({
			  "Access-Control-Allow-Origin":"*",
			  "Access-Control-Allow-Headers":"X-Requested-With,content-type",
			  "Access-Control-Allow-Methods":"GET,POST",
			  "Content-type":"application/json"
			})
		  }
		  return this.http.post<atividades[]>(this.url+"index.php",null,httpOptions);
	}
}
