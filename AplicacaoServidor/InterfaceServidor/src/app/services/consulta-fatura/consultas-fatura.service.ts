import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaFaturaService {

    url = "/api/routes/consulta_fatura";

    constructor(
        private http: HttpClient,
    ) { }

    cadastrarConsultaFatura(dados) {
        return this.http.post(`${this.url}/new.php`,
            {
                "fatura": dados.codFatura,
                "consultas": dados.consultas
            },
            {
                headers: {
                    'db_user': 'servidorLabmed',
                    'db_password': 'labmed2019'
                }
            });
    }
}
