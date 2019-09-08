import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDePacientes(){
		let pacientes;
		await fetch(this.baseURL+'/Paciente.php')
		.then(blob => blob.json())
		.then(data => pacientes = data);
		return pacientes;
	}
}
