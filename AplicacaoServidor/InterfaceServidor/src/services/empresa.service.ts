import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

	constructor() { }

	async listaDeEmpresas(){
		let empresas;
		// await fetch('http://localhost:8080/Empresa.php')
		await fetch('http://localhost/SistemaClinica/AplicacaoServidor/api/models/Empresa.php')
		.then(blob => blob.json())
		.then(data => empresas = data);
		return empresas;
	}
}
