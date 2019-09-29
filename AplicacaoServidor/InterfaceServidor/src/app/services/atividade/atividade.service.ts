import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeAtividades(){
		let atividades;
		await fetch(this.baseURL+'/Atividade.php')
		.then(blob => blob.json())
		.then(data => atividades = data);
		return atividades;
	}
}
