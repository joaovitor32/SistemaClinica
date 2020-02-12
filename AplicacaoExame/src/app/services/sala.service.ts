import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class SalaService {
    url = "/api/routes/";

    constructor(private http: HttpClient) {}

    listaDeSalas() {
        return this.http.get(this.url + "sala_exame", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    lerSala(id) {
        return this.http.get(this.url + "sala_exame/read.php", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }
}
