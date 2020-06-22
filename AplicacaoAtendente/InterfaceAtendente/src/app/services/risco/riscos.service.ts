import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class RiscosService {

  url:string

  constructor(
    private http: HttpClient
  ) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/api/routes/risco`;
  }


  listaDeRiscos(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/index.php')
  }
  cadastrarRisco(dados) {
    return this.http.post(this.url + "/new.php", {
      "nome": dados.nome,
      "descricao": dados.descricao,
      "categoria": dados.categoria,
    })
  }
  editarRisco(dados) {
    return this.http.post<any[]>(this.url + "/update.php", {
      "_id": dados.codigo,
      "nome": dados.nome,
      "descricao": dados.descricao,
      "categoria": dados.categoria
    });
  }
  lerRisco(id) {
    return this.http.get(this.url + "/read.php", {
      headers: {
        '_id': String(id)
      }
    });
  }

}
