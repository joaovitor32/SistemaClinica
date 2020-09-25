import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaRisco} from './categoriarisco'

@Injectable({
  providedIn: 'root'
})
export class CategoriaRiscoService {

  url: string;

  constructor(
    private http:HttpClient
  ) { 
    const host = localStorage.getItem("host");
    //this.url='http://localhost:8080/api/routes'
    this.url=`http://${host}/api/routes/`
  }
  
  listaCategoriaRisco():Observable<CategoriaRisco[]>{
    return this.http.get<CategoriaRisco[]>(this.url+'categoria_risco/index.php')
  }

  lerCategoriaRisco(id):Observable<CategoriaRisco>{
    return this.http.get<CategoriaRisco>(this.url+"/categoria_risco/read.php",{
      headers:{
        '_id':String(id),
      }
    })
  }

  cadastrarCategoriaRisco(dados){
    return this.http.post(this.url+"/categoria_risco/new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }

  deletarCategoriaRisco(id):Observable<CategoriaRisco>{
    return this.http.post<CategoriaRisco>(this.url+"categoria_risco/delete.php",{
      "_id":String(id)
    })
  }

  editarCategoriaRisco(dados):Observable<CategoriaRisco>{
    return this.http.post<CategoriaRisco>(this.url+'/categoria_risco/update.php',{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    })
  }
}
