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
    this.url='http://localhost:8080/api/routes'
    //this.url = `http://${host}/api/routes/parecer/`;
  }

  listaParecer():Observable<parecer[]>{
    return this.http.get<parecer[]>(this.url+'/parecer/index.php')
  }
  lerParecer(id):Observable<parecer>{
    return this.http.get<parecer>(this.url+"/parecer/read.php",{
      headers:{
        '_id':String(id),
      }
    })
  }
  cadastrarParecer(dados){
    return this.http.post(this.url+"/parecer/new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
  deletarParecer(id):Observable<parecer>{
    return this.http.post<parecer>(this.url+"/parecer/delete.php",{
      "_id":String(id)
    })
  }
  editarParecer(dados):Observable<parecer>{
    return this.http.post<parecer>(this.url+'/parecer/update.php',{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
}
