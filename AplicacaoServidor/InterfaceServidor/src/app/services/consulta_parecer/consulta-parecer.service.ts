import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class  ConsultaParecerService {

    url = "/api/routes/consulta_parecer";

    constructor(
        private http: HttpClient,
    ) { }

    readConsultaParecer(codConsulta):Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/read.php`,
            {
                headers: {
                    'db_user': 'servidorLabmed',
                    'db_password': 'labmed2019',
                    "_id":String(codConsulta),
                }
            });
    }
}
