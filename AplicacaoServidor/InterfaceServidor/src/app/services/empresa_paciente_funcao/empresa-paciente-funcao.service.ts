import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaPacienteFuncaoService {

	url:string

	constructor(private http:HttpClient){
		const host = localStorage.getItem("host");
		//this.url='http://localhost:8080/api/routes'
        this.url = `http://${host}/api/routes`;
	}


	lerPacienteFuncao(id){
		return this.http.get(this.url+"/empresa_paciente_funcao/read.php", {
			headers : {
        		"campo_principal":"codPaciente",
        		"codigo":String(id)
			}
		});
	}


}