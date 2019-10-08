import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import {EmpresasService} from '../../services/empresas/empresas.service'

@Component({
	selector: 'app-nova-empresa',
	templateUrl: './nova-empresa.component.html',
	styleUrls: ['./nova-empresa.component.css']
})
export class NovaEmpresaComponent implements OnInit {
	
	formularioNovaEmpresa:FormGroup;

	constructor(private formBuilder:FormBuilder,public sideNav:SidenavComponent,private empresaService:EmpresasService) { }

	ngOnInit() {
		this.sideNav.activeView="Empresas > Nova Empresa";
		this.configurarFormulario();
	}
	configurarFormulario(){
		this.formularioNovaEmpresa=this.formBuilder.group({
			nome:[null,Validators.required], 
			cnpj:[null,Validators.required], 
			telefone1:[null,Validators.required],
			telefone2:[null,Validators.required],
			tipoPgto:[null,Validators.required],
			rua:[null,Validators.required],
			numero:[null,Validators.required],
			bairro:[null,Validators.required],
			cidade:[null,Validators.required],
			cep:[null,Validators.required],     
			estado:[null,Validators.required],       
		})
	}
	async createEmpresa(){
		let form;
		form=this.formularioNovaEmpresa.value;
		await this.empresaService.cadastrarEmpresa(form).subscribe(
			response=>console.log('sucess',response),
		)
		this.formularioNovaEmpresa.reset();
	}
}
