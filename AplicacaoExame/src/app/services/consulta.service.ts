import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ConsultaService {
    url: string;

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes`;
    }

    listaDeConsultas() {
        return this.http.get(`${this.url}/consulta_exame_profissional`);
    }

    lerConsulta(id) {
        return this.http.get(`${this.url}/consulta/read.php`,
            {
                headers: { _id: String(id) }
            }
        );
    }

    lerProcedimentos(id) {
        return this.http.get(
            `${this.url}/consulta_exame_profissional/read.php`,
            {
                headers: { codigo: String(id) }
            }
        );
    }

    atualizarProcedimento(procedimento: Object) {
        return this.http.post(`${this.url}/consulta_exame_profissional/update.php`, procedimento);
    }
}
