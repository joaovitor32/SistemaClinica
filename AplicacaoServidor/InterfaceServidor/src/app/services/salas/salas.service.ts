import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { sala } from './sala'

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url="/api/routes/sala/"

  constructor(
    private http:HttpClient,
  ) { }

  listaDeSalas():Observable<sala[]>{
    return this.http.get<sala[]>(this.url+'index.php',{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
  lerSala(id):Observable<sala>{
    return this.http.get<sala>(this.url+'read.php',{
      headers:{
        'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
        "_id":String(id),
      }
    })
  }
  editarSala(dados):Observable<sala>{
    return this.http.post<sala>(this.url+"update.php",{
      "_id":dados.codigo,
      "nome":dados.nome,
      "descricao":dados.descricao,
    },{
	    headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  cadastrarSala(dados):Observable<sala>{
    return this.http.post<sala>(this.url+'new.php',{
      "nome":dados.nome,
      "descricao":dados.descricao
    },{headers:{
        'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
      }
    })
  }
  deletarSala(id):Observable<sala>{
    return this.http.post<sala>(this.url+'delete.php',{
      '_id':String(id)
    },{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
}
