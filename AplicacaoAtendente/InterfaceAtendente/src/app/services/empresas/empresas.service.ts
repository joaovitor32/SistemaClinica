import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { empresas } from "./empresas";

@Injectable({
    providedIn: "root"
})
export class EmpresasService {
    // url = "http://localhost/SistemaClinica/AplicacaoServidor/api/routes/empresa";
    url:string

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/empresa`;
    }

    listaDeEmpresas(): Observable<empresas[]> {
        return this.http.get<empresas[]>(this.url);
    }

    lerEmpresa(id) {
        return this.http.get(this.url + "/read.php", {
            headers: {
                _id: String(id)
            }
        });
    }

    cadastrarEmpresa(dados) {
        return this.http.post(
            this.url + "/new.php",
            {
                nome: dados.nome,
                cnpj: dados.cnpj,
                telefone1: dados.telefone1,
                telefone2: dados.telefone2,
                tipoPgto: dados.tipoPgto,
                rua: dados.rua,
                numero: dados.numero,
                bairro: dados.bairro,
                cidade: dados.cidade,
                estado: dados.estado,
                cep: dados.cep
            },
        );
    }

    atualizarEmpresa(dados): Observable<empresas[]> {
        return this.http.post<empresas[]>(
            this.url + "/update.php",
            {
                _id: dados.codigo,
                nome: dados.nome,
                cnpj: dados.cnpj,
                telefone1: dados.telefone1,
                telefone2: dados.telefone2,
                tipoPgto: dados.tipoPgto,
                rua: dados.rua,
                numero: dados.numero,
                bairro: dados.bairro,
                cidade: dados.cidade,
                estado: dados.estado,
                cep: dados.cep
            },
        );
    }

    deletarEmpresa(id): Observable<empresas[]> {
        return this.http.post<empresas[]>(
            this.url + "/delete.php",
            {
                _id: String(id)
            },
        );
    }
}
