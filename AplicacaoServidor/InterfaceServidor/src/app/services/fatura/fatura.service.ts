import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class FaturaService {

    url:string;

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/fatura`;
    }

    listaDeFaturas():Observable<any[]>{
		return this.http.get<any[]>(`${this.url}/index.php`);
	}

    lerFatura(id: number) {
        return this.http.get(`${this.url}/read.php`, {
            headers: {
                '_id': String(id)
            }
        });
    }

    cadastrarFatura(dados: any) {
        return this.http.post(`${this.url}/new.php`, {
            "empresa": dados.empresa,
            "descricao": dados.descricao,
            "preco": dados.preco
        });
    }

    atualizarFatura(dados: any) {
        return this.http.post(`${this.url}/update.php`, {
            "_id": dados.codigo,
            "status": dados.status ? 1 : 0,
            "descricao": dados.descricao
        });
    }
}
