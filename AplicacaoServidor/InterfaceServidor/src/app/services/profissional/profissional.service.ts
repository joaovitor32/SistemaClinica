import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  url = '/api/routes/profissional'

  constructor(private http: HttpClient) { }

  listaDeProfissional(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/index.php", {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }

  lerProfissional(id) {
    return this.http.get(this.url + "/read.php", {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019',
        '_id':id
      }
    });
  }

  cadastrarProfissional(dados) {
    return this.http.post(this.url + "/new.php", {
      "nome": dados.nome,
      "cpf": dados.cpf,
      "identificacao":dados.identificacao,
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }

  atualizarProfissional(dados): Observable<any[]> {

    return this.http.post<any[]>(this.url + "/update.php", {
      "_id": dados.codigo,
      "nome": dados.nome,
      "cpf": dados.cpf,
      "identificacao":dados.identificacao
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }

  deletarProfissional(id): Observable<any[]> {

    return this.http.post<any[]>(this.url + "/delete.php", {
      "_id":id
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }
}
