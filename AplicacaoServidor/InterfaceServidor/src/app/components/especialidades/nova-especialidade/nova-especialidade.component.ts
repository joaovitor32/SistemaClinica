import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EspecialidadeService } from '../../../services/especialidade/especialidade.service'

@Component({
  selector: 'app-nova-especialidade',
  templateUrl: './nova-especialidade.component.html',
  styleUrls: ['./nova-especialidade.component.css']
})
export class NovaEspecialidadeComponent implements OnInit {

  formularioNovaEspecialidade: FormGroup;
  executandoRequisicao: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private sidenav: SidenavComponent,
    private especialidadeService: EspecialidadeService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sidenav.activeView = "Especialidades -> Nova Especialidade";
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formularioNovaEspecialidade = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
    })
  }

  createEspecialidade() {
    let form = this.formularioNovaEspecialidade.value;
    for (let campo in form) {
      if (form[campo] == null) {
        return
      }
    }
    this.executandoRequisicao = true;
    this.especialidadeService.cadastrarEspecialidade(form).subscribe(response => {
      if (response) {
        this.openSnackBar('Cadastro efetuado!', 1);
        this.formularioNovaEspecialidade.reset();
        Object.keys(this.formularioNovaEspecialidade.controls).forEach(key => {
          this.formularioNovaEspecialidade.get(key).setErrors(null);
        })
      } else {
        this.openSnackBar("Erro cadastro não realizado!", 0);
      }
    })
    this.executandoRequisicao = false;
  }
  openSnackBar(mensagem, nivel) {
    switch (nivel) {
      case 1:
        nivel = "alerta-sucesso";
        break;
      case 0:
        nivel = "alerta-fracasso";
        break;
    }
    this._snackBar.open(mensagem, null, { duration: 2000, panelClass: nivel })
  }
}
