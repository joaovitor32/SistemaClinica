import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { CategoriaRiscoService } from '../../../services/categoria_risco/categoria-risco.service'
import { RiscosService } from '../../../services/risco/riscos.service'
import { RiscosComponent } from '../riscos.component'
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-novo-risco',
  templateUrl: './novo-risco.component.html',
  styleUrls: ['./novo-risco.component.css']
})
export class NovoRiscoComponent implements OnInit {

  categoria_risco = []
  formularioNovoRisco: FormGroup;
  executandoRequisicao: boolean = false

  constructor(
    private riscoComponent: RiscosComponent,
    private formBuilder: FormBuilder,
    public sideNav: SidenavComponent,
    private _snackBar: MatSnackBar,
    private riscoService: RiscosService,
    private categoriaRiscoService: CategoriaRiscoService

  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.configurarFormulario();
  }

  async carregarCategorias() {
    await this.categoriaRiscoService.lerCategoriasRisco().subscribe(categorias => {
      categorias.forEach(categoria => {
        console.log(categoria);
        this.categoria_risco.push(categoria);
      })
    })
  }

  configurarFormulario() {
    this.formularioNovoRisco = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      categoria: [null, Validators.required],
    })
  }
  createRisco() {
    let form = this.formularioNovoRisco.value;
    //Testar se algum campo está vazio
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.riscoService.cadastrarRisco(form).subscribe(
      response => {
        this.openSnackBar("Cadastro efetuado!", 1);
        // Reinicia os estados do formulário, também eliminando os erros de required
        this.formularioNovoRisco.reset();
        this.riscoComponent.ngOnInit();
        Object.keys(this.formularioNovoRisco.controls).forEach(
          key => {
            this.formularioNovoRisco.get(key).setErrors(null);
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
