import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class CategoriaRiscoService {

  url :string;

  constructor(
    private http: HttpClient
  ) {
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/api/routes/categoria_risco`;
   }
  lerCategoriasRisco() :Observable<any[]>{
    return this.http.get<any[]>(this.url + "/index.php");
  }

}
