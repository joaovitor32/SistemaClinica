import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ParecerService} from '../../services/parecer/parecer.service'
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-novo-parecer',
  templateUrl: './novo-parecer.component.html',
  styleUrls: ['./novo-parecer.component.css']
})
export class NovoParecerComponent implements OnInit {

  formularioNovoParecer:FormGroup;
  executandoRequisicao: Boolean = false;

  constructor(
    private parecerService:ParecerService,
    private sidenaveComponent:SidenavComponent,
    private formBuilder:FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sidenaveComponent.activeView="Novo parecer";
    this.inicializarFormulario();
  }
  inicializarFormulario(){
    this.formularioNovoParecer=this.formBuilder.group({
      nome:[null,Validators.required],
      descricao:[null,Validators.required],
    })
  }

  createParecer(){
    {

      let form = this.formularioNovoParecer.value;
      //Testar se algum campo está vazio
      for (let campo in form) {
        if (form[campo] == null) return;
      }
      //Exibe a barra de progresso
      this.executandoRequisicao = true;
  
      //Armazenando a resposta para dar feedback ao usuário
      this.parecerService.cadastrarParecer(form).subscribe(response => {
        console.log(response);
          this.openSnackBar("Cadastro efetuado!", 1);
          // Reinicia os estados do formulário, também eliminando os erros de required
          this.formularioNovoParecer.reset();
          Object.keys(this.formularioNovoParecer.controls).forEach(key => {
            this.formularioNovoParecer.get(key).setErrors(null);
          });
      
      },(err:HttpErrorResponse)=>{
        this.openSnackBar("Erro! Cadastro não realizado.", 0);
      });
  
      this.executandoRequisicao = false;
    }
  }

  openSnackBar(mensagem, nivel) {
    switch (nivel) {
      case 1:
        nivel = 'alerta-sucesso';
        break;
      case 0:
        nivel = 'alerta-fracasso';
        break;
    }
    this._snackBar.open(mensagem, "", { duration: 2000, panelClass: nivel });
  }
}
