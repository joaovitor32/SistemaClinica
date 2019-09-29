import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeExames(){
		let exames;
		await fetch(this.baseURL+'/Exame.php')
		.then(blob => blob.json())
		.then(data => exames = data);
		return exames;
	}
}
