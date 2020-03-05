import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ProfissionalService {
    url: string;

    constructor(private http: HttpClient) {
        const host = localStorage.getItem("host");
        this.url = `http://${host}/api/routes/profissional`;
    }

    listaDeProfissionais() {
        return this.http.get(this.url, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019"
            }
        });
    }

    lerProfissional(id: any) {
        return this.http.get(`${this.url}/read.php`, {
            headers: {
                db_user: "servidorLabmed",
                db_password: "labmed2019",
                _id: String(id)
            }
        });
    }
}
