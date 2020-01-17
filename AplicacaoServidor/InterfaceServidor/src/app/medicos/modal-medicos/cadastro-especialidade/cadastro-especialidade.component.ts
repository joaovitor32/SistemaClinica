import { Component, OnInit ,Inject} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EspecialidadeService } from 'src/app/services/especialidade/especialidade.service';
import { MedicosComponent } from '../../medicos.component';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-cadastro-especialidade',
  templateUrl: './cadastro-especialidade.component.html',
  styleUrls: ['./cadastro-especialidade.component.css']
})
export class CadastroEspecialidadeComponent implements OnInit {

	formularioNovaEspecialidade:FormGroup;
	executandoRequisicao: Boolean = false;

  constructor(

    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder:FormBuilder,
    private _snackBar:MatSnackBar,
	private especialidadeService:EspecialidadeService,
	private componentService:ComponentsService
  ) { }

  ngOnInit() {
	this.configurarFormulario();
  }

configurarFormulario(){
	this.formularioNovaEspecialidade = this.formBuilder.group({
		nomeEspecialidade : [null,Validators.required], 
		descricao : [null,Validators.required]
	});
  }
  createEspecialidade(){
		
		let form = this.formularioNovaEspecialidade.value;
		//Testar se algum campo está vazio
		for(let campo in form) {
			if (form[campo] == null) return;
		}
		//Exibe a barra de progresso
		this.executandoRequisicao = true;
		
		//Armazenando a resposta para dar feedback ao usuário
		this.especialidadeService.cadastrarEspecialidade(form).subscribe(response => {
			if(response) {
				this.openSnackBar("Cadastro efetuado!",1);
				// Reinicia os estados do formulário, também eliminando os erros de required
				this.formularioNovaEspecialidade.reset();
				
				Object.keys(this.formularioNovaEspecialidade.controls).forEach(key => {
					this.formularioNovaEspecialidade.get(key).setErrors(null) ;
				});
				this.componentService.updateTabelaEspecialidades("UPDATE_TABELA");
			} else {
				this.openSnackBar("Erro! Cadastro não realizado.",0);
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
