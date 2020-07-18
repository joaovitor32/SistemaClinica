import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { categoria } from './categoria-risco';
@Injectable({
  providedIn: 'root'
})

export class CategoriaRiscoService {

	// url='http://localhost/SistemaClinica/AplicacaoServidor/api/routes/categoria_risco'

  url :string;

  constructor(
    private http: HttpClient
  ) {
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/categoria_risco`;
   }
   
   listaDeCategorias() :Observable<categoria[]>{
    return this.http.get<categoria[]>(this.url);
  }
  
  lerCategoria(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'_id':String(id)
			}
		});
	}
}
