import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url="/api/routes/consulta"

  constructor(private http:HttpClient) { }
  
  consultasPorMedico(codMedico):Observable<any[]>{
    return this.http.post<any[]>(this.url+"/readByCodMedico.php",{
      "codMedico":codMedico
    },
    {
      headers : {
				'db_user' : 'servidorLabmed',
				'db_password' : 'labmed2019'
			}
    })
  }
  readConsulta(codConsulta):Observable<any[]>{
    return this.http.post<any[]>(this.url+'/read.php',{
      "codConsulta":codConsulta,
    },
    {
        headers : {
				  'db_user' : 'servidorLabmed',
				  'db_password' : 'labmed2019'
			}
    })
  }

  private codMedico= new BehaviorSubject('Default message');
  private codConsulta=new BehaviorSubject("Default message");
  private comando= new BehaviorSubject('Default message');
  private nome= new BehaviorSubject('Default message');


  currentCodMedico=this.codMedico.asObservable();
  updateCodMedico(message){
    this.codMedico.next(message);
  }

  currentCodConsulta=this.codConsulta.asObservable();
  updateCodConsulta(message){
    this.codConsulta.next(message);
  }

  currentComando=this.comando.asObservable();
  updateComando(message){
    this.comando.next(message);
  }

  currentNome=this.nome.asObservable();
  updateNome(message){
    this.nome.next(message);
  }

}
