import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { atividades } from "./atividades";

@Injectable({
    providedIn: "root"
})
export class AtividadeService {
    // url="http://localhost/SistemaClinica/AplicacaoServidor/api/routes/atividade";
    url:string
    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/api/routes/atividade`;
    }

    listaDeAtividades(): Observable<atividades[]> {
        return this.http.get<atividades[]>(`${this.url}`);
    }

    lerAtividade(id) {
        return this.http.get(this.url + "/read.php", {
            headers: {
                _id: String(id)
            }
        });
    }

    cadastrarAtividade(dados) {
        return this.http.post(
            this.url + "/new.php",
            {
                nome: dados.nome,
                descricao: dados.descricao
            },
        );
    }

    atualizarAtividade(dados): Observable<atividades[]> {
        return this.http.post<atividades[]>(
            this.url + "/update.php",
            {
                _id: dados.codigo,
                nome: dados.nome,
                descricao: dados.descricao
            },
        );
    }

    deletarAtividade(id): Observable<atividades[]> {
        return this.http.post<atividades[]>(
            this.url + "/delete.php",
            {
                _id: String(id)
            },
        );
    }
}
