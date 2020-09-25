import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoriaRiscoService } from '../../../services/categoria-risco/categoria-risco.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-modal-categoriarisco',
    templateUrl: './modal-categoriarisco.html'
})
export class ModalCategoriaRiscosComponent implements OnInit {

    formularioCategoriaRisco: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    categoriarisco: any;


    constructor(
        private CategoriaRiscoService: CategoriaRiscoService,
        public dialogRef: MatDialogRef<ModalCategoriaRiscosComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
    ) {
        this.acaoModal = data.acao;
    }

    onNoClick() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.inicializaFormulario();
    }

    inicializaFormulario() {
        this.CategoriaRiscoService.lerCategoriaRisco(this.data.id).subscribe(response => {
            this.categoriarisco = response;
            this.formularioCategoriaRisco = this.formBuilder.group({
                codigo: [this.categoriarisco.codCategoriaRisco, Validators.required],
                nome: [{
                    value: this.categoriarisco.nome,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
                descricao: [{
                    value: this.categoriarisco.descricao,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
            })
        })
    }
    
    toggleMode(novaAcao) {
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                for (let control in this.formularioCategoriaRisco.controls) {
                    this.formularioCategoriaRisco.get(control).disable();
                }
                break;
            case 'EDITAR':
                for (let control in this.formularioCategoriaRisco.controls) {
                    this.formularioCategoriaRisco.get(control).enable();
                }
                break;
        }
    }

    async deletarCategoriaRisco() {
        await this.CategoriaRiscoService.deletarCategoriaRisco(this.data.id).subscribe(response => {

            this.openSnackBar('Exclusão efetuada!', 1);
            this.onNoClick();
        }, (err: HttpErrorResponse) => {
            this.openSnackBar('Erro, exclusão não efetuada , verifique se a categoria não esta relacionada a nenhum Risco', 0);

        })
    }

    openSnackBar(mensagem, nivel) {
        switch (nivel) {
            case 1:
                nivel = "alerta-sucesso";
                break;
            case 0:
                nivel = 'alerta-fracasso';
                break;
        }
        this._snackBar.open(mensagem, "", { duration: 10000, panelClass: nivel });
    }

    async editarCategoriaRisco() {
        let form = this.formularioCategoriaRisco.value;
        console.log(form)
        for (let campo in form) {
            if (form[campo] == null) { return }
        }
        this.executandoRequisicao = true;
        await this.CategoriaRiscoService.editarCategoriaRisco(form).subscribe(response => {

            this.openSnackBar('Atualização efetuada!', 1);
            this.inicializaFormulario();
            this.toggleMode('VISUALIZAR');


        }, (err: HttpErrorResponse) => {

            this.openSnackBar('Erro, atualização não realizada!', 0);
        })
        this.executandoRequisicao = false;
    }

}
