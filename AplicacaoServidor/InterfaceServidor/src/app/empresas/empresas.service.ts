import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpresa } from './empresas';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http:HttpClient){ }

  url="http://localhost:8080/api/Controller/Empresa"

  obterEmpresas():Observable<IEmpresa[]>{
    const data={action:"VisualizarEmpresas"};
    return this.http.post<IEmpresa[]>(`${this.url}.php`,data);
  }

}
