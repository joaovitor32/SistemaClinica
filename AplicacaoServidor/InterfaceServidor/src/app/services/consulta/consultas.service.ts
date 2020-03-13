import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  url = "/api/routes/consulta/";

  constructor(
    private http: HttpClient,
  ) { }

  listaDeConsultas(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "index.php", {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    })
  }
  lerConsulta(id) {
    return this.http.get(this.url + 'read.php', {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019',
        '_id': String(id),
      }
    })
  }
  editarConsulta(form): Observable<any> {
    return this.http.post<any>(this.url + 'update.php', {
      '_id':form.codigo,
      'tipo_consulta':form.categoria,
      'status':form.status,
      'validade':form.validade,
      'inicio':form.inicio,
      'termino':form.termino
    }, {
      headers: {
        'db_user': 'servidorLabmed',
        'db_password': 'labmed2019'
      }
    });
  }
}
