import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData{
  success: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false;

  url="http://localhost:8080/api/Controller/Login.php";;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  } 

  getUserDetails(formJson){
    //post in API server return user info if correct
    return this.http.post<myData>(this.url,formJson);
  }
  getOut(){
    return this.http.post<myData>(this.url,{action:"GET_OUT"});
  }
}
