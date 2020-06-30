import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaExameProfissionalService {

    url: string;

    constructor(
        private http: HttpClient,
    ) { 
        const host = localStorage.getItem("host");
        this.url='http://localhost:8080/api/routes'
        //this.url = `http://${host}/api/routes/consulta_exame_profissional/`;
    }

    listarConsultas():Observable<any[]> {
        return this.http.get<any[]>(this.url)
    }

    lerConsultas(consulta: any) {
        return this.http.get(this.url + 'consulta_exame_profissional/read.php', {
            headers: {
                'campo_principal': 'codConsulta',
                'codigo': String(consulta),
            }
        });
    }
}
