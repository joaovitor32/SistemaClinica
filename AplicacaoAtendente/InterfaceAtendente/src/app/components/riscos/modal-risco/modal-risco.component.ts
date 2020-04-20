import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { RiscosService } from '../../../services/risco/riscos.service'
import { CategoriaRiscoService } from '../../../services/categoria_risco/categoria-risco.service'

@Component({
  selector: 'app-modal-risco',
  templateUrl: './modal-risco.component.html',
  styleUrls: ['./modal-risco.component.css']
})
export class ModalRiscoComponent implements OnInit {

  categoria_risco = []

  formularioRisco: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  risco: any;

  constructor(
    public dialogRef: MatDialogRef<ModalRiscoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private riscoService: RiscosService,
    private catRiscoService: CategoriaRiscoService,
    private _snackBar: MatSnackBar
  ) {
    this.acaoModal = data.acao;
  }

  ngOnInit() {
    this.carregarDadosCategoria();
    this.inicializaFormulario();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  carregarDadosCategoria() {
    this.catRiscoService.lerCategoriasRisco().subscribe(categorias => {
      categorias.forEach(categoria => {
        this.categoria_risco.push(categoria);
      })
    })


  }

  inicializaFormulario() {
    this.riscoService.lerRisco(this.data.id).subscribe(response => {
      this.risco = response;
      this.formularioRisco = this.formBuilder.group({
        codigo: [this.risco.codRisco, Validators.required],
        nome: [
          {
            value: this.risco.risco,
            disabled: this.acaoModal == "EDITAR" ? false : true
          },
          Validators.required
        ],
        descricao: [
          {
            value: this.risco.descricao_risco,
            disabled: this.acaoModal == "EDITAR" ? false : true
          },
          Validators.required
        ],
        categoria: [
          {
            value: this.risco.codCategoriaRisco,
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
        for (let control in this.formularioRisco.controls) {
          this.formularioRisco.get(control).disable();
        }
        break;
      case "EDITAR":
        for (let control in this.formularioRisco.controls) {
          this.formularioRisco.get(control).enable();
        }
        break;
    }
  }

  async editarRisco() {
    let form = this.formularioRisco.value;
    //Testar se algum campo está vazio
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    await this.riscoService.editarRisco(form).subscribe(response => {
      if (response) {
        this.openSnackBar("Atualização efetuada!", 1);
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


