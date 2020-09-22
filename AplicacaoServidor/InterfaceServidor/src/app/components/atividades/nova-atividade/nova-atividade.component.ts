import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AtividadeService } from '../../../services/atividade/atividade.service';
@Component({
    selector: 'app-nova-atividade',
    templateUrl: './nova-atividade.component.html'
})
export class NovaAtividadeComponent implements OnInit {

    formularioNovaAtividade: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private atividadeService: AtividadeService,
        private _snackBar: MatSnackBar
    ) { }


    ngOnInit() {
        this.sideNav.activeView = "Atividades > Nova Atividade";
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formularioNovaAtividade = this.formBuilder.group({
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        });
    }

    createAtividade() {

        let form = this.formularioNovaAtividade.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.atividadeService.cadastrarAtividade(form).subscribe(response => {

            this.openSnackBar("Cadastro efetuado!", 1);
            // Reinicia os estados do formulário, também eliminando os erros de required
            this.formularioNovaAtividade.reset();
            Object.keys(this.formularioNovaAtividade.controls).forEach(key => {
                this.formularioNovaAtividade.get(key).setErrors(null);
            });
        }, (err: HttpErrorResponse) => {
            this.openSnackBar("Erro! Cadastro não realizado.", 0);
        }
        );

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
