import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {FuncaoExame} from './funcaoexame'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncaoexameService {

  url = 'http://localhost/SistemaClinica/AplicacaoServidor/api/routes/funcao_exame'
  //url = '/api/routes/funcao_exame'

  constructor(private http:HttpClient) { }

  public lerFuncaoEmpresa(id):Observable<any>{
    let requestBody:any;
    requestBody={'_id':String(id)};
    let headers = new HttpHeaders({	'db_user' : 'servidorLabmed','db_password' : 'labmed2019'});
    return this.http.post<FuncaoExame[]>(this.url+"/read.php",requestBody,{headers:headers});
	}
}
