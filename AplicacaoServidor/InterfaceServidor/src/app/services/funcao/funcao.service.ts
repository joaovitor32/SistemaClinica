import { Injectable } from '@angular/core';
import {funcao} from './funcao';
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
  })
  export class FuncaoService {
  
	  url = '/api/routes/funcao/'
  
	  constructor(private http:HttpClient) { }
  
	  listaDeFuncoes(){
		  const httpOptions = {
			  headers: new HttpHeaders({
				"Access-Control-Allow-Origin":"*",
				"Access-Control-Allow-Headers":"X-Requested-With,content-type",
				"Access-Control-Allow-Methods":"GET,POST",
				"Content-type":"application/json"
			  })
			}
			return this.http.post<funcao[]>(this.url+'index.php',null,httpOptions);
	  }
  }
  
