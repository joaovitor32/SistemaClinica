import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { estados } from "./estado";

@Injectable({
    providedIn: "root"
})
export class EstadosService {
    //url = "http://localhost/SistemaClinica/AplicacaoServidor/api/routes/estado";
    url = "/api/routes/estado";

    constructor(private http: HttpClient) { }

    agendarEmConsulta(consulta: number) {
        return this.http.post(`${this.url}/new.php`, {
            tipo: 1,
            consulta: consulta,
            termino: null,
        }, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        })
    }

    listaDeEstados(): Observable<estados[]> {
        return this.http.get<estados[]>(this.url, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    /*lerEstado(id) {
        return this.http.get(this.url + "/read.php", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }

    cadastrarEstado(dados) {
        return this.http.post(
            this.url + "/new.php",
            {
                codConsulta: dados.codConsulta,
                paciente: dados.paciente,
                dataHora: dados.dataHora,
                empresa: dados.empresa,
                codTipoConsulta: dados.codTipoConsulta,
                tipo_consulta: dados.tipo_consulta,
                inicio: dados.inicio,
                termino: dados.termino,
                codEstado: dados.codEstado,
            },
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019"
                }
            }
        );
    }

    atualizarEstado(dados): Observable<estados[]> {
        return this.http.post<estados[]>(
            this.url + "/update.php",
            {
                codConsulta: dados.codConsulta,
                paciente: dados.paciente,
                dataHora: dados.dataHora,
                empresa: dados.empresa,
                codTipoConsulta: dados.codTipoConsulta,
                tipo_consulta: dados.tipo_consulta,
                inicio: dados.inicio,
                termino: dados.termino,
                codEstado: dados.codEstado,
            },
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019"
                }
            }
        );
    }

    deletarEstado(id): Observable<estados[]> {
        return this.http.post<estados[]>(
            this.url + "/delete.php",
            {
                _id: String(id)
            },
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019"
                }
            }
        );
    }*/
}
