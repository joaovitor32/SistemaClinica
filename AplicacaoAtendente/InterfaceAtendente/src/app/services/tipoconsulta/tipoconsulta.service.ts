import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tipoconsulta} from '../tipoconsulta/tipoconsulta';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoconsultaService {

  //url="http://localhost:8080/SistemaClinica/AplicacaoServidor/api/routes/tipo_consulta";
  url:string;
  constructor(
    private http:HttpClient,
  ) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/tipo_consulta`;
  }

  listaDeTipoConsultas():Observable<tipoconsulta[]>{
    return this.http.get<tipoconsulta[]>(this.url)
  }
  lerTipoConsulta(id):Observable<tipoconsulta>{
    return this.http.get<tipoconsulta>(this.url+"/read.php",{
      headers:{
        "_id":id
      }
    })
  }
}
