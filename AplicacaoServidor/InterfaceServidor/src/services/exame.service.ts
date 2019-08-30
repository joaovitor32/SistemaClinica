import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

	constructor() { }

	async listaDeExames(){
		let exames;
		// await fetch('http://localhost:8080/Exame.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Exame.php')
		.then(blob => blob.json())
		.then(data => exames = data);
		return exames;
	}
}
