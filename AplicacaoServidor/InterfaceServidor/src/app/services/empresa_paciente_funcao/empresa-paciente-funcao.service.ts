import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaPacienteFuncaoService {

	url='/api/routes/empresa_paciente_funcao'

	constructor(private http:HttpClient){}


	lerPacienteFuncao(id){
		return this.http.get(this.url+"/read.php", {
			headers : {
				'db_user':'servidorLabmed',
				'db_password':'labmed2019',
        		"campo_principal":"codPaciente",
        		"codigo":String(id)
			}
		});
	}


}