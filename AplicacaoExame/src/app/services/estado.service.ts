import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class EstadoService {
    url = "http://localhost:8080/api/routes/estado";

    constructor(private http: HttpClient) { }

    encerraEstado(id: number) {
        return this.http.post(`${this.url}/update.php`,
            {
                _id: id
            }, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    listaEstados(id) {
        return this.http.get(`${this.url}/read.php`,
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019",
                    consulta: id
                }
            });
    }

    /** Códigos cadastrados:
     * 1 - Agendado
     * 2 - Cancelado
     * 3 - Em espera
     * 4 - Atrasado
     * 5 - Em consulta
     * 6 - Encerrado
     */
    criaEmConsulta(consulta: number) {
        return this.http.post(`${this.url}/new.php`,
            {
                tipo: 5,
                termino: null,
                consulta
            }, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    criaEmEspera(consulta: number) {
        return this.http.post(`${this.url}/new.php`,
            {
                tipo: 3,
                termino: null,
                consulta
            }, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }
}
