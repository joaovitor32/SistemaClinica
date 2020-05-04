import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExameRiscoService {

  url='/api/routes/risco_exame/';

  constructor(
    private http:HttpClient,
  ) { }

  listaDeRiscos():Observable<any[]>{
		return this.http.get<any[]>(this.url+'index.php', {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
 
}
