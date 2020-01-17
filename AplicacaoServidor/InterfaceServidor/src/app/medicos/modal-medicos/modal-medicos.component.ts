import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import {MedicoService } from '../../services/medico/medico.service';

@Component({
  selector: 'app-modal-medicos',
  templateUrl: './modal-medicos.component.html'
})
export class ModalMedicosComponent implements OnInit {

  formularioMedico:FormGroup;
	executandoRequisicao:boolean;
	acaoModal:string;
  medico:any;
  
  constructor(
    private medicoService:MedicoService,
    public dialogRef: MatDialogRef<ModalMedicosComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private formBuilder:FormBuilder,
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
  inicializaFormulario(){
    this.medicoService.lerMedico(this.data.id).subscribe(response=>{
      this.medico=response;
      this.formularioMedico=this.formBuilder.group({
        nome : [{
           value: this.medico.nome, 
            disabled: this.acaoModal == 'EDITAR' ? false : true
          }, Validators.required
        ],
        crm : [{
          value: this.medico.crm, 
           disabled: this.acaoModal == 'EDITAR' ? false : true
         }, Validators.required
       ],
       cpf : [{
        value: this.medico.cpf, 
         disabled: this.acaoModal == 'EDITAR' ? false : true
           }, Validators.required
        ],
        codigo:[this.data.id,Validators.required],

      })
    })
  }
  async deletarMedico(){
		await this.medicoService.deletarMedico(this.data.id)
			.subscribe(response =>{
				if(response) {
					this.openSnackBar("Exclusão efetuada!",1);
					this.onNoClick();
				} else {
					this.openSnackBar("Erro! Exclusão não realizada.",0);
				}
			}
		);
	}
  toggleMode(novaAcao){
		//Altera a view entre visualização e edição
		this.acaoModal = novaAcao;
		switch(this.acaoModal) {
			case 'VISUALIZAR':
				for(let control in this.formularioMedico.controls) {
					this.formularioMedico.get(control).disable();
				}
				break;
			case 'EDITAR':
				for(let control in this.formularioMedico.controls) {
					this.formularioMedico.get(control).enable();
				}
				break;
		}
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
  async editarMedico(){
		let form = this.formularioMedico.value;
		//Testar se algum campo está vazio
		for(let campo in form) {
			if (form[campo] == null) return;
		}
		//Exibe a barra de progresso
		this.executandoRequisicao = true;
		
		//Armazenando a resposta para dar feedback ao usuário
		await this.medicoService.atualizarMedico(form)
			.subscribe(response =>{
				if(response) {
					this.openSnackBar("Atualização efetuada!",1);
					this.inicializaFormulario();
					this.toggleMode('VISUALIZAR');
				} else {
					//this.openSnackBar("Erro! Atualização não realizada.",0);
				}
			}
		);
		this.executandoRequisicao = false;
	}
}
