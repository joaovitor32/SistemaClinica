import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {parecer} from './parecer';

@Injectable({
  providedIn: 'root'
})
export class ParecerService {

  url="/api/routes/parecer/";

  constructor(
    private http:HttpClient,
  ) { }

  listaParecer():Observable<parecer[]>{
    return this.http.get<parecer[]>(this.url+'index.php',{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
  lerParecer(id):Observable<parecer>{
    return this.http.get<parecer>(this.url+"read.php",{
      headers:{
        'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
        '_id':String(id),
      }
    })
  }
  cadastrarParecer(dados){
    return this.http.post(this.url+"new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
    },{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  deletarParecer(id):Observable<parecer>{
    return this.http.post<parecer>(this.url+"delete.php",{
      "_id":String(id)
    },{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
  editarParecer(dados):Observable<parecer>{
    return this.http.post<parecer>(this.url+'update.php',{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    },{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
}
