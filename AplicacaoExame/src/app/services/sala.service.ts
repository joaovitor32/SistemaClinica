import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class SalaService {
    url: string;

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/sala_exame`;
    }

    listaDeSalas() {
        return this.http.get(this.url, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    lerSala(id) {
        return this.http.get(`${this.url}/read.php`, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }
}
