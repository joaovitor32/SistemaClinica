import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameSalaService {

  url="/api/routes/sala_exame/"

  constructor(
    private http:HttpClient
  ) { }
  
  createSalaExame(form):Observable<any[]>{
    return this.http.post<any[]>(this.url+'new.php',{
      'sala':form.codSala,
      'exames':form.codExames
    },
    {
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
}
