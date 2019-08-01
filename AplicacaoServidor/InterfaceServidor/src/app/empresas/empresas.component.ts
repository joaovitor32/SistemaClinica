import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ArrayType } from '@angular/compiler';

@Component({
	selector: 'app-empresas',
	templateUrl: './empresas.component.html',
	styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

	jsonEmpresas:JSON = JSON.parse('[{"nome":"Serra Jr.","cnpj":"75.997.418/0001-53","telefone":"(22) 2322-2323","tipoPgto":1},{"nome":"Coca Cola","cnpj":"76.997.418/0001-53","telefone":"(22) 2323-2323","tipoPgto":0},{"nome":"Nova FAOL","cnpj":"77.997.418/0001-53","telefone":"(22) 2525-2525","tipoPgto":1},{"nome":"Viação 1001","cnpj":"78.997.418/0001-53","telefone":"(22) 2424-2424","tipoPgto":0}]');
	html:string;

	constructor(public sideNav:SidenavComponent) { }

	ngOnInit() {
		this.html = this.popularTabela();
		this.sideNav.activeView="Empresas";
	}

	popularTabela(){
		var html = '';
		for(let i in this.jsonEmpresas){
			html += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonEmpresas[i].nome +' </td><td> '+ this.jsonEmpresas[i].cnpj +' </td><td> '+ this.jsonEmpresas[i].telefone +' </td><td> '+ this.jsonEmpresas[i].tipoPgto +' </td></tr>'; 
		}
		return html;
	}

	buscaTermo(event){
		var busca = '';
		const regex = new RegExp(event.target.value, 'gi');
		for(let i in this.jsonEmpresas){
			console.table(this.jsonEmpresas[i]);
			console.log(event.target.value);
			console.log(this.jsonEmpresas[i].telefone.search(regex))

			if(this.jsonEmpresas[i].nome.search(regex) != -1 || this.jsonEmpresas[i].cnpj.search(regex)  != -1  || this.jsonEmpresas[i].telefone.search(regex)  != -1 ){
				// html += ' '+this.jsonEmpresas[i].nome.search(regex) + ' <br>';
				busca += '<tr><th scope="row"> '+ i +' </th><td> '+ this.jsonEmpresas[i].nome +' </td><td> '+ this.jsonEmpresas[i].cnpj +' </td><td> '+ this.jsonEmpresas[i].telefone +' </td><td> '+ this.jsonEmpresas[i].tipoPgto +' </td></tr>'; 
			}
				
		}
		this.html = busca;
	}
}
