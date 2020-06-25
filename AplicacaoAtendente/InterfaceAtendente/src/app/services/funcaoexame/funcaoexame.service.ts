import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {FuncaoExame} from './funcaoexame'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncaoexameService {

  //url = 'http://localhost/SistemaClinica/AplicacaoServidor/api/routes/funcao_exame'
  url :string;
  constructor(private http:HttpClient) {
    const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/funcao_exame`;
   }

  public lerFuncaoEmpresa(id):Observable<any>{
    let headers = new HttpHeaders({'id':String(id)});
    return this.http.get<FuncaoExame[]>(this.url+"/read.php",{headers:headers});
	}
}
