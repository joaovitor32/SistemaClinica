import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

	constructor() { }

	async listaDeFuncoes(){
		let funcoes;
		// await fetch('http://localhost:8080/Funcao.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Funcao.php')
		.then(blob => blob.json())
		.then(data => funcoes = data);
		return funcoes;
	}
}
