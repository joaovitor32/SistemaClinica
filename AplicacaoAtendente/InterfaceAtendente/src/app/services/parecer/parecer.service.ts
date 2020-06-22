import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParecerService {

  url:string

  constructor(
    private http: HttpClient,
  ) {
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/api/routes/parecer/`;
  }

  listaParecer(): Observable<any> {
    return this.http.get<any>(this.url + 'index.php')
  }
  lerParecer(id): Observable<any> {
    return this.http.get<any>(this.url + "read.php", {
      headers: {
        '_id': String(id),
      }
    })
  }
  cadastrarParecer(dados) {
    return this.http.post(this.url + "new.php", {
      "nome": dados.nome,
      "descricao": dados.descricao,
    })
  }
  deletarParecer(id): Observable<any> {
    return this.http.post<any>(this.url + "delete.php", {
      "_id": String(id)
    })
  }
  editarParecer(dados): Observable<any> {
    return this.http.post<any>(this.url + 'update.php', {
      "_id": dados.codigo,
      "nome": dados.nome,
      "descricao": dados.descricao,
    })
  }
}