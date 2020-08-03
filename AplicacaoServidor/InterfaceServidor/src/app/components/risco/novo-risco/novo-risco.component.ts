import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaRiscoService } from 'src/app/services/categoria-risco/categoria-risco.service';
import { RiscoService } from 'src/app/services/risco/risco.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-novo-risco',
    templateUrl: './novo-risco.component.html'
})
export class NovoRiscoComponent implements OnInit {

    formularioNovoRisco: FormGroup;
    executandoRequisicao: Boolean = false;
    categoriarisco = [];

    constructor(
        private formBuilder: FormBuilder,
        private sidenav: SidenavComponent,
        private categoriaRiscoService: CategoriaRiscoService,
        private riscoService: RiscoService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sidenav.activeView='Risco > Novo Risco';
        this.carregarCategoriaRiscos()
        this.configurarFomulario();
    }
    carregarCategoriaRiscos() {
        this.categoriaRiscoService.listaCategoriaRisco().subscribe(catRisco => {
            catRisco.forEach(categoria => {
                this.categoriarisco.push(categoria);
            })
        })
    }
    configurarFomulario() {
        this.formularioNovoRisco = this.formBuilder.group({
            nome: [null, Validators.required],
            descricao: [null, Validators.required],
            codCategoria: [null, Validators.required],
        })
    }
    createRisco() {
        let form = this.formularioNovoRisco.value;
        for (let campo in form) {
            if (form[campo] == null) {
                return
            }
        }
        this.executandoRequisicao = true;
        this.riscoService.cadastrarRisco(form).subscribe(response => {
            this.openSnackBar('Cadastro efetuado!', 1);
            this.formularioNovoRisco.reset();
            Object.keys(this.formularioNovoRisco.controls).forEach(key => {
                this.formularioNovoRisco.get(key).setErrors(null);
            })

        }, (err: HttpErrorResponse) => {
            this.openSnackBar("Erro cadastro não realizado!", 0);
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
