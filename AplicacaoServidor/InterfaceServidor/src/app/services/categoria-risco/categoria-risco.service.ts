import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaRisco} from './categoriarisco'

@Injectable({
  providedIn: 'root'
})
export class CategoriaRiscoService {

  url="/api/routes/categoria_risco/"

  constructor(
    private http:HttpClient
  ) { }
  
  listaCategoriaRisco():Observable<CategoriaRisco[]>{
    return this.http.get<CategoriaRisco[]>(this.url+'index.php',{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
}
