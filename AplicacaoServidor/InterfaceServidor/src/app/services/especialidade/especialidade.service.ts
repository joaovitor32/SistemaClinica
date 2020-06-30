import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { especialidade } from './especialidade';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  url :string
  constructor(
    private http:HttpClient
  ) { 
    const host = localStorage.getItem("host");
    this.url='http://localhost:8080/api/routes'
    //this.url = `http://${host}/api/routes/especialidade`;
  }

  cadastrarEspecialidade(dados) {
    return this.http.post(this.url + "/especialidade/new.php", {
      "nome": dados.nome,
      "descricao": dados.descricao,
    });
  }
  listaDeEspecialidades():Observable<especialidade[]>{
		return this.http.get<especialidade[]>(this.url);
	}
  lerEspecialidade(id){
    return this.http.get(this.url+"/especialidade/read.php",{headers:{
     
      '_id':String(id),
    }})
  }
  deletarEspecialidade(id):Observable<especialidade>{
    return this.http.post<especialidade>(this.url+'/especialidade/delete.php',{
      "_id":String(id)
    })
  }
  editarEspecialidade(dados):Observable<especialidade>{
    return this.http.post<especialidade>(this.url+'/especialidade/update.php',{
      '_id':dados.codigo,
      'nome':dados.nome,
      "descricao":dados.descricao
    })
  }
}
