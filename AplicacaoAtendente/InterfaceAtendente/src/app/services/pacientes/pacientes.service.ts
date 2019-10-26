import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {pacientes } from './pacientes';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService{

  url  ='/api/routes/paciente'

  constructor(private http:HttpClient) { }

  listaDePacientes():Observable<pacientes[]>{
		return this.http.get<pacientes[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019',
				'Content-Type':'application/json'
			} 
		});
	}
}