import { Injectable } from '@angular/core';
import {subgrupo} from './subgrupo'
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

	url="/api/routes/subgrupo/" 

	constructor(private http:HttpClient) { }

	listaDeSubgrupo(){	
		const httpOptions = {
			headers: new HttpHeaders({
			  "Access-Control-Allow-Origin":"*",
			  "Access-Control-Allow-Headers":"X-Requested-With,content-type",
			  "Access-Control-Allow-Methods":"GET,POST",
			  "Content-type":"application/json"
			})
		  }
		  return this.http.post<subgrupo[]>(this.url+"index.php",null,httpOptions);
	}
}
