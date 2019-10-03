import { Injectable } from '@angular/core';
import {paciente} from './paciente'
import{HttpClient,HttpHeaders,HttpInterceptor, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	url='/api/routes/paciente/'

	constructor(private http:HttpClient){}

	listaDePacientes():Observable<paciente[]>{
		const httpOptions = {
			headers: new HttpHeaders({
			  "Access-Control-Allow-Origin":"*",
			  "Access-Control-Allow-Headers":"X-Requested-With,content-type",
			  "Access-Control-Allow-Methods":"GET,POST",
			  "Content-type":"application/json"
			})
		  }
		  return this.http.post<paciente[]>(this.url+'index.php',null,httpOptions);
	}
}
