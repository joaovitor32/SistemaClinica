import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FuncaoService } from '../../services/funcao/funcao.service';

@Component({
  selector: 'app-modal-funcoes',
  templateUrl: './modal-funcoes.component.html'
})
export class ModalFuncoesComponent implements OnInit {

  	formularioFuncao:FormGroup;
	executandoRequisicao:boolean;
	acaoModal:string;
	funcao:any;

	constructor(
		public dialogRef: MatDialogRef<ModalFuncoesComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private formBuilder:FormBuilder,
		private funcaoService:FuncaoService,
		private _snackBar: MatSnackBar
	) {
		this.acaoModal = data.acao;		
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	ngOnInit() {
		this.inicializaFormulario();
	}

	async inicializaFormulario() {
		//Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
		this.funcaoService.lerFuncao(this.data.id).subscribe(response => {
			this.funcao = response;
			console.log(response)
			this.formularioFuncao = this.formBuilder.group({
				codigo : [this.funcao.codFuncao, Validators.required], 
				nome : [{
						value: this.funcao.nome, 
						disabled: this.acaoModal == 'EDITAR' ? false : true
					}, Validators.required
				], 
				descricao : [{
						value: this.funcao.descricao, 
						disabled: this.acaoModal == 'EDITAR' ? false : true
					}, Validators.required
				],
				setor : [{
					value: this.funcao.setor, 
					disabled: this.acaoModal == 'EDITAR' ? false : true
				}, Validators.required
			]
			});
		});
	}

	toggleMode(novaAcao){
		//Altera a view entre visualização e edição
		this.acaoModal = novaAcao;
		switch(this.acaoModal) {
			case 'VISUALIZAR':
				for(let control in this.formularioFuncao.controls) {
					this.formularioFuncao.get(control).disable();
				}
				break;
			case 'EDITAR':
				for(let control in this.formularioFuncao.controls) {
					this.formularioFuncao.get(control).enable();
				}
				break;
		}
	}

	async deletarFuncao(){
		this.onNoClick();
		this.openSnackBar("Exclusão efetuada!",1);
		await this.funcaoService.deletarFuncao(this.data.id)
			.subscribe(response =>{
				if(response) {
					this.onNoClick();
					this.openSnackBar("Exclusão efetuada!",3);
					
				} else {
					this.openSnackBar("Erro! Exclusão não realizada.",0);
				}
			}
		);
	}

	async editarFuncao(){
		let form = this.formularioFuncao.value;
		//Testar se algum campo está vazio
		for(let campo in form) {
			if (form[campo] == null) return;
		}
		//Exibe a barra de progresso
		this.executandoRequisicao = true;
		
		//Armazenando a resposta para dar feedback ao usuário
		this.funcaoService.atualizarFuncao(form)
			.subscribe(response =>{
				if(response) {
					this.openSnackBar("Atualização efetuada!",1);
					this.inicializaFormulario();
					this.toggleMode('VISUALIZAR');
				} else {
					this.openSnackBar("Erro! Atualização não realizada.",0);
				}
			}
		);
		this.executandoRequisicao = false;
	}

	openSnackBar(mensagem,nivel) {
		//Feedback visual na forma de um alerta do tipo SnackBar
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
