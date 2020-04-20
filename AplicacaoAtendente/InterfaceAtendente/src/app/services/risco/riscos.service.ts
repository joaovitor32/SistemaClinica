import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class RiscosService {

  url = "/api/routes/risco"

  constructor(
    private http: HttpClient
  ) { }


  listaDeRiscos(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/index.php', {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    }
    )
  }
  cadastrarRisco(dados) {
    return this.http.post(this.url + "/new.php", {
      "nome": dados.nome,
      "descricao": dados.descricao,
      "categoria": dados.categoria,
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    })
  }
  editarRisco(dados) {
    return this.http.post<any[]>(this.url + "/update.php", {
      "_id": dados.codigo,
      "nome": dados.nome,
      "descricao": dados.descricao,
      "categoria": dados.categoria
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }
  lerRisco(id) {
    return this.http.get(this.url + "/read.php", {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019',
        '_id': String(id)
      }
    });
  }

}
