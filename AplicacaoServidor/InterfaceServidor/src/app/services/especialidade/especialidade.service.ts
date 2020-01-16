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
      "nome": dados.nomeEspecialidade,
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

}
