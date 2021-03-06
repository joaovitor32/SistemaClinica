import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasExameService  {

	url="/api/routes/sala_exame" 

	constructor(private http:HttpClient) { 
		this.url='http://localhost:8080/api/routes'
	}

	cadastrarSalaExames(sala,exames) {
		return this.http.post(this.url+"/new.php", {
			"sala": sala,
			"exames": exames
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
	readSalaExames(sala) {
		return this.http.get(this.url+"/new.php", {
			headers : {
				"_id": sala,
			}
		});
	}
}
