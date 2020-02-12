import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ConsultaService {
    url = "/api/routes/";

    constructor(private http: HttpClient) {}

    listaDeConsultas() {
        return this.http.get(this.url + "consulta_exame_profissional", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    lerConsulta(id) {
        return this.http.get(this.url + "consulta/read.php", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }

    lerProcedimentos(id) {
        return this.http.get(
            this.url + "consulta_exame_profissional/read.php",
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019",
                    campo_principal: "codConsulta",
                    codigo: String(id)
                }
            }
        );
    }

    atualizarProcedimento(procedimento: Object) {
        return this.http.post(
            this.url + "consulta_exame_profissional/update.php",
            procedimento,
            {
                headers: {
                    db_user: "servidorLabmed",
                    db_password: "labmed2019"
                }
            }
        );
    }
}
