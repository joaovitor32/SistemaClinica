import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

	constructor() { }

	async listaDeMedicos(){
		let medicos;
		// await fetch('http://localhost:8080/Medico.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Empresa.php')
		.then(blob => blob.json())
		.then(data => medicos = data);
		return medicos;
	}
}
