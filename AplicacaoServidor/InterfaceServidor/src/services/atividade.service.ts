import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

	constructor() { }

	async listaDeAtividades(){
		let atividades;
		// await fetch('http://localhost:8080/Atividade.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Atividade.php')
		.then(blob => blob.json())
		.then(data => atividades = data);
		return atividades;
	}
}
