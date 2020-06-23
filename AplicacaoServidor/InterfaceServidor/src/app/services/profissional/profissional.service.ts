import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  url:string

  constructor(private http: HttpClient) {
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/profissional`;
   }

  listaDeProfissional(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/index.php");
  }

  lerProfissional(id) {
    return this.http.get(this.url + "/read.php");
  }

  cadastrarProfissional(dados) {
    return this.http.post(this.url + "/new.php", {
      "nome": dados.nome,
      "cpf": dados.cpf,
      "identificacao":dados.identificacao,
    });
  }

  atualizarProfissional(dados): Observable<any[]> {

    return this.http.post<any[]>(this.url + "/update.php", {
      "_id": dados.codigo,
      "nome": dados.nome,
      "cpf": dados.cpf,
      "identificacao":dados.identificacao
    });
  }

  deletarProfissional(id): Observable<any[]> {

    return this.http.post<any[]>(this.url + "/delete.php", {
      "_id":id
    });
  }
}
