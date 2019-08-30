import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	constructor() { }

	async listaDePacientes(){
		let pacientes;
		// await fetch('http://localhost:8080/Paciente.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Paciente.php')
		.then(blob => blob.json())
		.then(data => pacientes = data);
		return pacientes;
	}
}
