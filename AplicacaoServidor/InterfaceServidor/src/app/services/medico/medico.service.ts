import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {medico} from './medico';
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

	url = '/api/routes/medico/'

	constructor(private http:HttpClient) { }

	listaDeMedicos(){
		const httpOptions = {
			headers: new HttpHeaders({
			  "Access-Control-Allow-Origin":"*",
			  "Access-Control-Allow-Headers":"X-Requested-With,content-type",
			  "Access-Control-Allow-Methods":"GET,POST",
			  "Content-type":"application/json"
			})
		  }
		  return this.http.post<medico[]>(this.url+'index.php',null,httpOptions);
	}
}
