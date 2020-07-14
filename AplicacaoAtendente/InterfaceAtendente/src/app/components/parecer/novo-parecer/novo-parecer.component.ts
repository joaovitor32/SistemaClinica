import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ParecerService } from '../../../services/parecer/parecer.service';
import { ParecerComponent } from '../parecer.component'

@Component({
  selector: 'app-novo-parecer',
  templateUrl: './novo-parecer.component.html',
  styleUrls: ['./novo-parecer.component.css']
})
export class NovoParecerComponent implements OnInit {

  formularioNovoParecer: FormGroup;
  executandoRequisicao: boolean = false

  constructor(
    private parecerComponent: ParecerComponent,
    private formBuilder: FormBuilder,
    public sideNav: SidenavComponent,
    private _snackBar: MatSnackBar,
    private parecerService: ParecerService,
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.formularioNovoParecer = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
    })
  }
  createParecer() {
    let form = this.formularioNovoParecer.value;
    //Testar se algum campo está vazio
    for (let campo in form) {
        if (form[campo]==null){
          this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel cadastrar !!!", null, {
            duration: 6000,
        });
        return;
        }
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.parecerService.cadastrarParecer(form).subscribe(
      response => {
        this.openSnackBar("Cadastro efetuado com sucesso !!!", 1);
        // Reinicia os estados do formulário, também eliminando os erros de required
        this.formularioNovoParecer.reset();
        this.parecerComponent.ngOnInit();
        Object.keys(this.formularioNovoParecer.controls).forEach(
          key => {
            this.formularioNovoParecer.get(key).setErrors(null);
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

