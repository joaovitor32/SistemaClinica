import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SalasService } from '../../../services/salas/salas.service'

@Component({
  selector: 'app-modal-sala',
  templateUrl: './modal-sala.component.html',
  styleUrls: ['./modal-sala.component.css']
})
export class ModalSalaComponent implements OnInit {

  formularioSala: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  sala: any;

  constructor(
    public dialogRef: MatDialogRef<ModalSalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private salaService: SalasService,
    private _snackBar: MatSnackBar
  ) {
    this.acaoModal = data.acao;
  }

  ngOnInit() {
    this.inicializaFormulario();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  inicializaFormulario() {
    this.salaService.lerSala(this.data.id).subscribe(response => {
      this.sala = response;
      this.formularioSala = this.formBuilder.group({
        codigo: [this.sala.codSala, Validators.required],
        nome: [
          {
            value: this.sala.nome,
            disabled: this.acaoModal == "EDITAR" ? false : true
          },
          Validators.required
        ],
        descricao: [
          {
            value: this.sala.descricao,
            disabled: this.acaoModal == "EDITAR" ? false : true
          },
          Validators.required
        ],
      })
    })
  }
  toggleMode(novaAcao) {
    //Altera a view entre visualização e edição
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case "VISUALIZAR":
        for (let control in this.formularioSala.controls) {
          this.formularioSala.get(control).disable();
        }
        break;
      case "EDITAR":
        for (let control in this.formularioSala.controls) {
          this.formularioSala.get(control).enable();
        }
        break;
    }
  }

  async editarSala() {
    let form = this.formularioSala.value;
   //Testar se algum campo está vazio
   for (let campo in form) {
    if (form[campo]==''){
    this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel atualizar !!!", null, {
        duration: 6000,
    });
    return;
    }
}
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    await this.salaService.editarSala(form).subscribe(response => {
      if (response) {
        this.openSnackBar("Atualização efetuada com sucesso !!!", 1);
        this.inicializaFormulario();
        this.toggleMode("VISUALIZAR");
      } else {
        this.openSnackBar("Erro! Atualização não realizada.", 0);
      }
    });
    this.executandoRequisicao = false;
  }

  openSnackBar(mensagem, nivel) {
    //Feedback visual na forma de um alerta do tipo SnackBar
    switch (nivel) {
      case 1:
        nivel = "alerta-sucesso";
        break;
      case 0:
        nivel = "alerta-fracasso";
        break;
    }
    this._snackBar.open(mensagem, "", {
      duration: 2000,
      panelClass: nivel
    });
  }
}
