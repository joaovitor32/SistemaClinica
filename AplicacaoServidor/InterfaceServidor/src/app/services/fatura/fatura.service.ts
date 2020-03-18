import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FaturaService {

    url = "/api/routes/fatura";

    constructor(private http: HttpClient) {

    }

    listaDeFaturas() {
        return this.http.get(this.url, {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019'
            }
        });
    }

    lerFatura(id: number) {
        return this.http.get(`${this.url}/read.php`, {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019',
                '_id': String(id)
            }
        });
    }

    cadastrarFatura(dados: any) {
        return this.http.post(`${this.url}/new.php`, {
            "empresa": dados.empresa,
            "descricao": dados.descricao
        }, {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019'
            }
        });
    }

    atualizarFatura(dados: any) {
        return this.http.post(`${this.url}/update.php`, {
            "_id": dados.codigo,
            "status": dados.status ? 1 : 0,
            "descricao": dados.descricao
        }, {
            headers: {
                'db_user': 'servidorLabmed',
                'db_password': 'labmed2019'
            }
        });
    }
}
