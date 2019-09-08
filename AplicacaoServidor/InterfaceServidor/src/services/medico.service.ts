import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeMedicos(){
		let medicos;
		await fetch(this.baseURL+'/Medico.php')
		.then(blob => blob.json())
		.then(data => medicos = data);
		return medicos;
	}
}
