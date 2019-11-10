import { Injectable } from '@angular/core';
import { login } from '../../interface/login'
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInStatus=false;
  url="/api/Controller/Login.php";

  constructor(private http:HttpClient) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
  }

  fazerLogin(formJson):Observable<any>{
    return this.http.post<any>(this.url,formJson);
  }
  logout():Observable<any>{
    return this.http.post<any>(this.url,{action:"GET_OUT"});
  }

}
