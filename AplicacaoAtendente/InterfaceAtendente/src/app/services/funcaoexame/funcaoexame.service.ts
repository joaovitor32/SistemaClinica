import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {FuncaoExame} from './funcaoexame'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncaoexameService {

  url = '/api/routes/FuncaoExame'

  constructor(private http:HttpClient) { }

  public lerFuncaoEmpresa(id):Observable<any>{
    let requestBody:any;
    requestBody={'_id':String(id)};
    let headers = new HttpHeaders({	'db_user' : 'servidorLabmed','db_password' : 'labmed2019'});
    return this.http.post<FuncaoExame[]>(this.url+"/read.php",requestBody,{headers:headers});
	}
}
