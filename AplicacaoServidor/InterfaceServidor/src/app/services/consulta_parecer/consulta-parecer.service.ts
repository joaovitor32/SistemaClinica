import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class  ConsultaParecerService {

    url: string;
    constructor(
        private http: HttpClient,
    ) { 
        const host = localStorage.getItem("host");
        this.url='http://localhost:8080/api/routes'
        //this.url = `http://${host}/api/routes/consulta_parecer`;
    }

    readConsultaParecer(codConsulta):Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/consulta_parecer/read.php`,
            {
                headers: {
                    "_id":String(codConsulta),
                }
            });
    }
}
