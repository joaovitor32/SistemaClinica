import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

	baseURL:String = 'http://localhost:8080';
	// baseURL:String = 'http://localhost/SistemaClinica/AplicacaoServidor/api';

	constructor() { }

	async listaDeEmpresas(){
		let empresas;
		await fetch(this.baseURL+'/Empresa.php')
		.then(blob => blob.json())
		.then(data => empresas = data);
		return empresas;
	}
}
