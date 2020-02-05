import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { especialidade } from './especialidade';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  url = '/api/routes/especialidade/'
  constructor(
    private http:HttpClient
  ) { }

  cadastrarEspecialidade(dados) {
    return this.http.post(this.url + "/new.php", {
      "nome": dados.nome,
      "descricao": dados.descricao,
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }
  listaDeEspecialidades():Observable<especialidade[]>{
		return this.http.get<especialidade[]>(this.url, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
	}
  lerEspecialidade(id){
    return this.http.get(this.url+"read.php",{headers:{
      'db_user':'servidorLabmed',
      'db_password':'labmed',
      '_id':String(id),
    }})
  }
  deletarEspecialidade(id):Observable<especialidade>{
    return this.http.post<especialidade>(this.url+'delete.php',{
      "_id":String(id)
    },{
      headers:{
        'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
      }
    })
  }
  editarEspecialidade(dados):Observable<especialidade>{
    return this.http.post<especialidade>(this.url+'update.php',{
      '_id':dados.codigo,
      'nome':dados.nome,
      "descricao":dados.descricao
    },{headers:{
      'db_user' : 'servidorLabmed',
			'db_password' : 'labmed2019'
    }})
  }
}
