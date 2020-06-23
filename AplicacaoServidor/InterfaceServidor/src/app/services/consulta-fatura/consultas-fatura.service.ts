import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaFaturaService {

    url: string;

    constructor(
        private http: HttpClient,
    ) { 
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/consulta_fatura`;
    }

    cadastrarConsultaFatura(dados) {
        return this.http.post(`${this.url}/new.php`,
            {
                "fatura": dados.codFatura,
                "consultas": dados.consultas
            });
    }
}
