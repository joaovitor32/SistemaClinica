import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeSubgrupo(){
		let subgrupos;
		await fetch(this.baseURL+'/Subgrupo.php')
		.then(blob => blob.json())
		.then(data => subgrupos = data);
		return subgrupos;
	}
}
