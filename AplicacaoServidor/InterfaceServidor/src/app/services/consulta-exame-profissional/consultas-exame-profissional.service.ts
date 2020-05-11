import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaExameProfissionalService {

    url = "/api/routes/consulta_exame_profissional/";

    constructor(
        private http: HttpClient,
    ) { }

    listarConsultas():Observable<any[]> {
        return this.http.get<any[]>(this.url, {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019'
            }
        })
    }

    lerConsultas(consulta: any) {
        return this.http.get(this.url + 'read.php', {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019',
                'campo_principal': 'codConsulta',
                'codigo': String(consulta),
            }
        });
    }
}
