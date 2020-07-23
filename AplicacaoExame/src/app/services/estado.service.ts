import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class EstadoService {
    url: string;

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/estado`;
    }

    encerraEstado(id: number) {
        return this.http.post(`${this.url}/update.php`, { _id: id });
    }

    listaEstados(id) {
        return this.http.get(`${this.url}/read.php`,
            {
                headers: { consulta: id }
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
                acao:"MUDARESTADO",
                termino: null,
                consulta
            }
        );
    }

    criaEmEspera(consulta: number) {
        return this.http.post(`${this.url}/new.php`,
            {
                tipo: 3,
                acao:"MUDARESTADO",
                termino: null,
                consulta
            }
        );
    }
}
