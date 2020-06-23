import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExameRiscoService {

  url: string;
  constructor(
    private http:HttpClient,
  ) { 
	const host = localStorage.getItem("host");
	this.url = `http://${host}/api/routes/risco_exame/`;
  }

  listaDeRiscos():Observable<any[]>{
		return this.http.get<any[]>(this.url+'index.php');
	}
 
}
