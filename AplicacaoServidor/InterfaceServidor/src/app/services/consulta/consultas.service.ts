import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultasService {

    url:string;
    constructor(
        private http: HttpClient,
    ) { 
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/consulta/`;
    }

    listaDeConsultas(): Observable<any[]> {
        return this.http.get<any[]>(this.url + "index.php")
    }
    lerConsulta(id) {
        return this.http.get(this.url + 'read.php', {
            headers: {
                '_id': String(id),
            }
        })
    }
    editarConsulta(form): Observable<any> {
        return this.http.post<any>(this.url + 'update.php', {
            '_id': form.codigo,
            'tipo_consulta': form.categoria,
            'status': form.status,
            'validade': form.validade,
            'inicio': form.inicio,
            'termino': form.termino
        });
    }
    statusConsulta(dados): Observable<any> {
        return this.http.post<any>(this.url + 'change_status.php', {
            '_id': dados.consulta,
            'status': dados.status
        });
    }
    deletarConsulta(id): Observable<any> {
        return this.http.post<any>(this.url + 'delete.php', {
            "_id": String(id)
        })
    }
}
