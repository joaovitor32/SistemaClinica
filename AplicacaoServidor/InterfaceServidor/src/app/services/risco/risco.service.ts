import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { risco } from './risco';

@Injectable({
  providedIn: 'root'
})
export class RiscoService {

  url:string;

  constructor(
    private http:HttpClient,
  ) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/risco/`;
  }

  listaDeRiscos():Observable<risco[]>{
    return this.http.get<risco[]>(this.url+'index.php')
  }
  deletarRisco(id):Observable<risco>{
    return this.http.post<risco>(this.url+'delete.php',{
      '_id':String(id)
    })
  }
  cadastrarRisco(dados){
    return this.http.post(this.url+"new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
      "categoria":dados.codCategoria,
    })
  }
  editarRisco(dados){
    return this.http.post<risco[]>(this.url+"update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
      "descricao" : dados.descricao,
      "categoria":dados.codCategoriaRisco
		});
  }
  lerRisco(id){
    return this.http.get(this.url+"read.php", {
			headers : {

				'_id':String(id)
			}
		});
  }

}
