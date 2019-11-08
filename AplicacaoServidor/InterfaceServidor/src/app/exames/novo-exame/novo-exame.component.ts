import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ExameService } from '../../services/exame/exame.service';

@Component({
	selector: 'app-novo-exame',
	templateUrl: './novo-exame.component.html',
	styleUrls: ['./novo-exame.component.css']
})
export class NovoExameComponent implements OnInit {

	formularioNovoExame:FormGroup;
	executandoRequisicao: Boolean = false;

	constructor(
		private formBuilder:FormBuilder, 
		public sideNav:SidenavComponent, 
		private exameService:ExameService, 
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.sideNav.activeView = "Exames > Novo Exame";
		this.configurarFormulario();
	}

	configurarFormulario(){
		this.formularioNovoExame = this.formBuilder.group({
			nome : [null,Validators.required], 
			codigo : [null,Validators.required], 
			preco : [null,Validators.required],
			descricao : [null,Validators.required],
		});
	}

	createExame(){
		
		let form = this.formularioNovoExame.value;
		//Testar se algum campo está vazio
		for(let campo in form) {
			if (form[campo] == null) return;
		}
		//Exibe a barra de progresso
		this.executandoRequisicao = true;
		
		//Armazenando a resposta para dar feedback ao usuário
		this.exameService.cadastrarExame(form).subscribe(response => {
			if (response) {
				this.openSnackBar("Cadastro efetuado!", 1);
				// Reinicia os estados do formulário, também eliminando os erros de required
				this.formularioNovoExame.reset();
				Object.keys(this.formularioNovoExame.controls).forEach(key => {
					this.formularioNovoExame.get(key).setErrors(null);
				});
			}
			else {
				this.openSnackBar("Erro! Cadastro não realizado.", 0);
			}
		});

		this.executandoRequisicao = false;
	}

	openSnackBar(mensagem,nivel) {
		switch(nivel) {
			case 1:
				nivel = 'alerta-sucesso';
				break;
			case 0:
				nivel = 'alerta-fracasso';
				break;
		}
		this._snackBar.open(mensagem, "" , { duration:2000, panelClass: nivel });
	}

}
