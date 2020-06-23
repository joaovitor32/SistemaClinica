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
        this.url = `http://${host}/api/routes/empresa_paciente_funcao`;
	}


	lerPacienteFuncao(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
        		"campo_principal":"codPaciente",
        		"codigo":String(id)
			}
		});
	}


}