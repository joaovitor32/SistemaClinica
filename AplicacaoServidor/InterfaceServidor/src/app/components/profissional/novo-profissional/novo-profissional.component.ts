import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfissionalService } from '../../../services/profissional/profissional.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-novo-profissional',
    templateUrl: './novo-profissional.component.html'
})
export class NovoProfissionalComponent implements OnInit {

    formularioNovoProfissional: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private profissionalService: ProfissionalService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sideNav.activeView = "Médicos > Novo Médico";
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formularioNovoProfissional = this.formBuilder.group({
            nome: [null, Validators.required],
            cpf: [null, Validators.required,Validators.pattern('[0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})')],
            identificacao: [null, Validators.required]
        })
    }
    createProfissional() {

        let form = this.formularioNovoProfissional.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;
        if (this.formularioNovoProfissional.invalid) {
            this._snackBar.open("Algum dado do profissional", null, {
              duration: 2000,
            });;
            this.executandoRequisicao = false;
            return;
          }
        //Armazenando a resposta para dar feedback ao usuário
        this.profissionalService.cadastrarProfissional(form).subscribe(response => {
            this.openSnackBar("Cadastro efetuado!", 1);
            // Reinicia os estados do formulário, também eliminando os erros de required
            this.formularioNovoProfissional.reset();
            Object.keys(this.formularioNovoProfissional.controls).forEach(key => {
                this.formularioNovoProfissional.get(key).setErrors(null);
            });
        }
            , (HttpErrorResponse) => {
                this.openSnackBar("Cadastro não efetuado efetuado!", 0);
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
