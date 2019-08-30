import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

	constructor() { }

	async listaDeSubgrupo(){
		let subgrupos;
		// await fetch('http://localhost:8080/Subgrupo.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Empresa.php')
		.then(blob => blob.json())
		.then(data => subgrupos = data);
		return subgrupos;
	}
}
