import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { sala } from './sala'

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url:string

  constructor(
    private http:HttpClient,
  ) { 
    const host = localStorage.getItem("host");
    //this.url='http://localhost:8080/api/routes'
    this.url = `http://${host}/api/routes`;
  }

  listaDeSalas():Observable<sala[]>{
    return this.http.get<sala[]>(this.url+'/sala/index.php')
  }
  lerSala(id):Observable<sala>{
    return this.http.get<sala>(this.url+'/sala/read.php',{
      headers:{

        "_id":String(id),
      }
    })
  }
  editarSala(dados):Observable<sala>{
    return this.http.post<sala>(this.url+"/sala/update.php",{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
  cadastrarSala(dados):Observable<sala>{
    return this.http.post<sala>(this.url+'/sala/new.php',{
      "nome":dados.nome,
      "descricao":dados.descricao
    })
  }
  deletarSala(id):Observable<sala>{
    return this.http.post<sala>(this.url+'/sala/delete.php',{
      '_id':String(id)
    })
  }
}
