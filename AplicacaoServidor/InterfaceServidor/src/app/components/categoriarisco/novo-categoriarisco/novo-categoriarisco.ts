import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriaRiscoService } from '../../../services/categoria-risco/categoria-risco.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-novo-categoriarisco',
    templateUrl: './novo-categoriarisco.html'
})

export class NovoCategoriaRiscoComponent implements OnInit {

    formularioNovoCategoriaRisco: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private CategoriaRiscoService: CategoriaRiscoService,
        private sidenaveComponent: SidenavComponent,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sidenaveComponent.activeView = "Categoria > Nova Categoria ";
        this.inicializarFormulario();
    }

    inicializarFormulario() {
        this.formularioNovoCategoriaRisco = this.formBuilder.group({
            nome: [null, Validators.required],
            descricao: [null, Validators.required],
        })
    }

    createCategoriaRisco() {
        {
            let form = this.formularioNovoCategoriaRisco.value;

            for (let campo in form) {
                if (form[campo] == null) return;
            }
            this.executandoRequisicao = true;

            this.CategoriaRiscoService.cadastrarCategoriaRisco(form).subscribe(data => {

                this.openSnackBar("Cadastro efetuado!", 1);
                this.formularioNovoCategoriaRisco.reset();
                Object.keys(this.formularioNovoCategoriaRisco.controls).forEach(key => {
                    this.formularioNovoCategoriaRisco.get(key).setErrors(null);
                });

            }, (err: HttpErrorResponse) => {
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
