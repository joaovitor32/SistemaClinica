import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalasService } from '../../../services/salas/salas.service'
import { ExameService } from '../../../services/exame/exame.service'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-nova-sala',
    templateUrl: './nova-sala.component.html'
})
export class NovaSalaComponent implements OnInit {

    formularioNovaSala: FormGroup;
    exames = [];
    executandoRequisicao: Boolean = false;

    constructor(
        private exameService: ExameService,
        private sidenavComponent: SidenavComponent,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private salaService: SalasService
    ) { }

    ngOnInit() {
        this.sidenavComponent.activeView = "Sala > Nova Sala";
        this.inicializaFormulario();
        this.carregarExames();
    }

    carregarExames() {
        this.exameService.listaDeExames().subscribe(exames => {
            exames.forEach(exame => {
                this.exames.push(exame);
            })
        })
    }
    inicializaFormulario() {
        this.formularioNovaSala = this.formBuilder.group({
            nome: [null, Validators.required],
            descricao: [null, Validators.required],

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
        this.salaService.cadastrarSala(form).subscribe(response => {

            this.openSnackBar("Cadastro efetuado!", 1);
            // Reinicia os estados do formulário, também eliminando os erros de required
            this.formularioNovaSala.reset();
            Object.keys(this.formularioNovaSala.controls).forEach(key => {
                this.formularioNovaSala.get(key).setErrors(null);
            });

        }, (err: HttpErrorResponse) => {
            this.openSnackBar("Erro! Cadastro não realizado.", 0);
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
