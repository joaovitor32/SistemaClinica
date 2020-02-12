import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ProfissionalService {
    url = "/api/routes/profissional";

    constructor(private http: HttpClient) {}

    listaDeProfissionais() {
        return this.http.get(this.url, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    lerProfissional(id) {
        return this.http.get(this.url + "/read.php", {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }
}
