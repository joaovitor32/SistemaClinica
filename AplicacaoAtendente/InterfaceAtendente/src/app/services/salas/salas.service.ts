import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url:string

  constructor(
    private http:HttpClient,
  ) {
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/sala/`;
   }

  listaDeSalas():Observable<any[]>{
    return this.http.get<any[]>(this.url+'index.php')
  }
  lerSala(id):Observable<any>{
    return this.http.get<any>(this.url+'read.php',{
      headers:{
        "_id":String(id),
      }
    })
  }
  editarSala(dados):Observable<any>{
    return this.http.post<any>(this.url+"update.php",{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
  cadastrarSala(dados):Observable<any>{
    return this.http.post<any>(this.url+'new.php',{
      "nome":dados.nome,
      "descricao":dados.descricao
    })
  }
  deletarSala(id):Observable<any>{
    return this.http.post<any>(this.url+'delete.php',{
      '_id':String(id)
    })
  }
}