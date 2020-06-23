import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {parecer} from './parecer';

@Injectable({
  providedIn: 'root'
})
export class ParecerService {

  url:string;

  constructor(
    private http:HttpClient,
  ) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/parecer/`;
  }

  listaParecer():Observable<parecer[]>{
    return this.http.get<parecer[]>(this.url+'index.php')
  }
  lerParecer(id):Observable<parecer>{
    return this.http.get<parecer>(this.url+"read.php",{
      headers:{
        '_id':String(id),
      }
    })
  }
  cadastrarParecer(dados){
    return this.http.post(this.url+"new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
  deletarParecer(id):Observable<parecer>{
    return this.http.post<parecer>(this.url+"delete.php",{
      "_id":String(id)
    })
  }
  editarParecer(dados):Observable<parecer>{
    return this.http.post<parecer>(this.url+'update.php',{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
}
