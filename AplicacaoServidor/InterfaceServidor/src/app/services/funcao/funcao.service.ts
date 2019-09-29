import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeFuncoes(){
		let funcoes;
		await fetch(this.baseURL+'/Funcao.php')
		.then(blob => blob.json())
		.then(data => funcoes = data);
		return funcoes;
	}
}
