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
    //this.url='http://localhost:8080/api/routes'
    this.url = `http://${host}/api/routes/`;
  }
  
  createSalaExame(sala,exames):Observable<any[]>{
    return this.http.post<any[]>(this.url+'/sala_exame/new.php',{
      'sala':sala,
      'exames':exames
    })
  }
}
