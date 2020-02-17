import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { risco } from './risco';

@Injectable({
  providedIn: 'root'
})
export class RiscoService {

  url='/api/routes/risco/';

  constructor(
    private http:HttpClient,
  ) { }

  listaDeRiscos():Observable<risco[]>{
    return this.http.get<risco[]>(this.url+'index.php',{
      headers:{
          'db_user' : 'servidorLabmed',
				  'db_password' : 'labmed2019'
        }
      }
    )
  }
  cadastrarRisco(dados){
    return this.http.post(this.url+"new.php",{
      "nome":dados.nome,
      "descricao":dados.descricao,
      "categoria":dados.codCategoria,
    },{
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  editarRisco(dados){
    return this.http.post<risco[]>(this.url+"update.php", {
			"_id" : dados.codigo,
			"nome" : dados.nome,
      "descricao" : dados.descricao,
      "categoria":dados.codCategoriaRisco
		}, {
			headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
		});
  }
  lerRisco(id){
    return this.http.get(this.url+"read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
				'_id':String(id)
			}
		});
  }

}
