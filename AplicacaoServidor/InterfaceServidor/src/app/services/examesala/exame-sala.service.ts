import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameSalaService {

  url:string;

  constructor(
    private http:HttpClient
  ) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/sala_exame/`;
  }
  
  createSalaExame(sala,exames):Observable<any[]>{
    return this.http.post<any[]>(this.url+'new.php',{
      'sala':sala,
      'exames':exames
    })
  }
}
