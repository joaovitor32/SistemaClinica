import { Injectable } from '@angular/core';
import {exame} from './exame'
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

	url='/api/routes/exame/';

	constructor(private http:HttpClient) { }

	listaDeExames():Observable<exame[]>{
		const httpOptions = {
			headers: new HttpHeaders({
			  "Access-Control-Allow-Origin":"*",
			  "Access-Control-Allow-Headers":"X-Requested-With,content-type",
			  "Access-Control-Allow-Methods":"GET,POST",
			  "Content-type":"application/json"
			})
		  }
		  return this.http.post<exame[]>(this.url+'index.php',null,httpOptions);
	}
}
