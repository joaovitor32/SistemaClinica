import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { CategoriaRiscoService } from '../../../services/categoria_risco/categoria-risco.service'
import { RiscosService } from '../../../services/risco/riscos.service'
import { SalasComponent } from '../salas.component'
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { SalasService } from 'src/app/services/salas/salas.service';

@Component({
  selector: 'app-nova-sala',
  templateUrl: './nova-sala.component.html',
  styleUrls: ['./nova-sala.component.css']
})
export class NovaSalaComponent implements OnInit {


  formularioNovaSala: FormGroup;
  executandoRequisicao: boolean = false

  constructor(
    private salaComponent: SalasComponent,
    private formBuilder: FormBuilder,
    public sideNav: SidenavComponent,
    private _snackBar: MatSnackBar,
    private salaService: SalasService,

  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.formularioNovaSala = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required]
    })
  }
  createSala() {
    let form = this.formularioNovaSala.value;
    //Testar se algum campo está vazio
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.salaService.cadastrarSala(form).subscribe(
      response => {
        this.openSnackBar("Cadastro efetuado!", 1);
        // Reinicia os estados do formulário, também eliminando os erros de required
        this.formularioNovaSala.reset();
        this.salaComponent.ngOnInit();
        Object.keys(this.formularioNovaSala.controls).forEach(
          key => {
            this.formularioNovaSala.get(key).setErrors(null);
          }
        );
      },
      error => {
        this.openSnackBar("Erro! Cadastro não realizado.", 0);
      }
    );
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
    this._snackBar.open(mensagem, "", {
      duration: 2000,
      panelClass: nivel
    });
  }
}
