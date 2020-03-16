import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RiscoService } from '../../../services/risco/risco.service'
import { CategoriaRiscoService } from 'src/app/services/categoria-risco/categoria-risco.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-modal-risco',
  templateUrl: './modal-risco.component.html',
  styleUrls: ['./modal-risco.component.css']
})
export class ModalRiscoComponent implements OnInit {


  formularioRisco: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  risco: any;
  categoriasRisco = [];

  constructor(
    public dialogRef: MatDialogRef<ModalRiscoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private riscoService: RiscoService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private categoriaRiscoService: CategoriaRiscoService
  ) {
    this.acaoModal = data.acao;
  }
  onNoClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.carregarCategoriasRisco();
    this.inicializaFormulario();
  }
  inicializaFormulario() {
    this.riscoService.lerRisco(this.data.id).subscribe(response => {
      this.risco = response;
      this.formularioRisco = this.formBuilder.group({
        codigo: [this.risco.codRisco, Validators.required],
        nome: [{
          value: this.risco.nome,
          disabled: this.acaoModal == 'EDITAR' ? false : true,
        }, Validators.required],
        descricao: [{
          value: this.risco.descricao,
          disabled: this.acaoModal == 'EDITAR' ? false : true,
        }, Validators.required],
        codCategoriaRisco: [this.risco.codCategoriaRisco, Validators.required],
      })
    })
  }
  carregarCategoriasRisco() {
    this.categoriaRiscoService.listaCategoriaRisco().subscribe(categoriarisco => {
      categoriarisco.forEach(catRisco => {
        this.categoriasRisco.push(catRisco);
      })
    })
  }
  toggleMode(novaAcao) {
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case 'VISUALIZAR':
        for (let control in this.formularioRisco.controls) {
          this.formularioRisco.get(control).disable();
        }
        break;
      case 'EDITAR':
        for (let control in this.formularioRisco.controls) {
          this.formularioRisco.get(control).enable();
        }
        break;
    }
  }
  async editarRisco() {
    let form = this.formularioRisco.value;
    for (let campo in form) {
      if (form[campo] == null) { return }
    }
    this.executandoRequisicao = true;
    this.riscoService.editarRisco(form).subscribe(response => {

      this.openSnackBar('Atualização efetuada!', 1);
      this.inicializaFormulario();
      this.toggleMode('VISUALIZAR');

    }, (err: HttpErrorResponse) => {

      this.openSnackBar('Erro, atualização não realizada!', 0);
    })
    this.executandoRequisicao = false;
  }
  openSnackBar(mensagem, nivel) {
    switch (nivel) {
      case 1:
        nivel = "alerta-sucesso";
        break;
      case 0:
        nivel = 'alerta-fracasso';
        break;
    }
  }
}
