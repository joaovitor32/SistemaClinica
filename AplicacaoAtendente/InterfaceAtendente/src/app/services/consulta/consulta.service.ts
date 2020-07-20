import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url:string
  constructor(private http: HttpClient) { 
    const host = localStorage.getItem("host");
    this.url = `http://${host}/api/routes/consulta/`;
  }

  cadastrarConsulta(firstForm,secondForm) {
    let subgrupo=firstForm.subgrupo?firstForm.subgrupo.codSubgrupo:null;
    return this.http.post(this.url + "/new.php",
      {
        "paciente":firstForm.paciente.codPaciente,
        "empresa":firstForm.empresa.codEmpresa,
        "subgrupo":subgrupo,
        "funcao":firstForm.funcao.codFuncao,
        "tipo_consulta":secondForm.consulta,
        "status":0,
        "validade":12,
        "dataHora":secondForm.dataExame
      })
  }

}
