import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MedicoService } from '../../services/medico/medico.service';

@Component({
  selector: 'app-novo-medico',
  templateUrl: './novo-medico.component.html',
  styleUrls: ['./novo-medico.component.css']
})
export class NovoMedicoComponent implements OnInit {

  formularioNovoMedico: FormGroup;
  executandoRequisicao: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public sideNav: SidenavComponent,
    private medicoService: MedicoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sideNav.activeView = "Médicos > Novo Médico";
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formularioNovoMedico = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      crm: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  createMedico() {

    let form = this.formularioNovoMedico.value;
    //Testar se algum campo está vazio
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.medicoService.cadastrarMedico(form).subscribe(response => {
      if (response) {
        this.openSnackBar("Cadastro efetuado!", 1);
        // Reinicia os estados do formulário, também eliminando os erros de required
        this.formularioNovoMedico.reset();
        Object.keys(this.formularioNovoMedico.controls).forEach(key => {
          this.formularioNovoMedico.get(key).setErrors(null);
        });
      }
      else {
        this.openSnackBar("Erro! Cadastro não realizado.", 0);
      }
    });

    this.executandoRequisicao = false;
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
