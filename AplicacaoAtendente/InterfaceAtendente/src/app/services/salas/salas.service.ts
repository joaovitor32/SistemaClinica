import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url="/api/routes/sala/"

  constructor(
    private http:HttpClient,
  ) { }

  listaDeSalas():Observable<any[]>{
    return this.http.get<any[]>(this.url+'index.php',{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
  lerSala(id):Observable<any>{
    return this.http.get<any>(this.url+'read.php',{
      headers:{
        'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
        "_id":String(id),
      }
    })
  }
  editarSala(dados):Observable<any>{
    return this.http.post<any>(this.url+"update.php",{
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
  cadastrarSala(dados):Observable<any>{
    return this.http.post<any>(this.url+'new.php',{
      "nome":dados.nome,
      "descricao":dados.descricao
    },{headers:{
        'db_user' : 'servidorLabmed',
        'db_password' : 'labmed2019',
      }
    })
  }
  deletarSala(id):Observable<any>{
    return this.http.post<any>(this.url+'delete.php',{
      '_id':String(id)
    },{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
}