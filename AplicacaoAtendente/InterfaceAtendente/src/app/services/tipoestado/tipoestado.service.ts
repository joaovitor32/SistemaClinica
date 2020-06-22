import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tipoestado } from "./tipoestado";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TipoestadoService {
    //url="http://localhost/SistemaClinica/AplicacaoServidor/api/routes/tipo_estado"
    url:string
    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/api/routes/tipo_estado`;
    }

    listaDeTipoEstado(): Observable<tipoestado[]> {
        return this.http.get<tipoestado[]>(this.url);
    }
}
