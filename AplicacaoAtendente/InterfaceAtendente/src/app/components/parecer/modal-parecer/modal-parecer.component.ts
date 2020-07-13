import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ParecerService } from '../../../services/parecer/parecer.service'

@Component({
  selector: 'app-modal-parecer',
  templateUrl: './modal-parecer.component.html',
  styleUrls: ['./modal-parecer.component.css']
})
export class ModalParecerComponent implements OnInit {

  formularioParecer: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  parecer: any;

  constructor(
    public dialogRef: MatDialogRef<ModalParecerComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private parecerService: ParecerService,
    private _snackBar: MatSnackBar
  ) {
    this.acaoModal = data.acao;
  }

  ngOnInit() {
    this.inicializaFormulario();
  }
  inicializaFormulario() {
    this.parecerService.lerParecer(this.data.id).subscribe(response => {
      this.parecer = response;
      this.formularioParecer = this.formBuilder.group({
        codigo: [this.parecer.codParecer, Validators.required],
        nome: [
          {
            value: this.parecer.nome,
            disabled: this.acaoModal == "EDITAR" ? false : true
          },
          Validators.required
        ],
        descricao: [
          {
            value: this.parecer.descricao,
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
        for (let control in this.formularioParecer.controls) {
          this.formularioParecer.get(control).disable();
        }
        break;
      case "EDITAR":
        for (let control in this.formularioParecer.controls) {
          this.formularioParecer.get(control).enable();
        }
        break;
    }
  }

  async editarParecer() {
    let form = this.formularioParecer.value;
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
    await this.parecerService.editarParecer(form).subscribe(response => {
      if (response) {
        this.openSnackBar("Atualização efetuada com sucesso!!!", 1);
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
  onNoClick(): void {
    this.dialogRef.close();
  }
}
