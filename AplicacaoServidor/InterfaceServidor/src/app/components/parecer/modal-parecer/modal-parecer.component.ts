import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ParecerService } from '../../../services/parecer/parecer.service'
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-modal-parecer',
    templateUrl: './modal-parecer.component.html'
})
export class ModalParecerComponent implements OnInit {

    formularioParecer: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    parecer: any;


    constructor(
        private parecerService: ParecerService,
        public dialogRef: MatDialogRef<ModalParecerComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
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
        this.parecerService.lerParecer(this.data.id).subscribe(response => {
            this.parecer = response;
            this.formularioParecer = this.formBuilder.group({
                codigo: [this.parecer.codParecer, Validators.required],
                nome: [{
                    value: this.parecer.nome,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
                descricao: [{
                    value: this.parecer.descricao,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
            })
        })
    }
    toggleMode(novaAcao) {
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                for (let control in this.formularioParecer.controls) {
                    this.formularioParecer.get(control).disable();
                }
                break;
            case 'EDITAR':
                for (let control in this.formularioParecer.controls) {
                    this.formularioParecer.get(control).enable();
                }
                break;
        }
    }
    async deletarParecer() {
        await this.parecerService.deletarParecer(this.data.id).subscribe(response => {
            if (response) {
                this.openSnackBar('Exclusão efetuada!', 1);
                this.onNoClick();
            } else {
                this.openSnackBar('Erro, exclusão não efetuada', 0);
            }
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
    }

    async editarParecer() {
        let form = this.formularioParecer.value;
        console.log(form)
        for (let campo in form) {
            if (form[campo] == null) { return }
        }
        this.executandoRequisicao = true;
        await this.parecerService.editarParecer(form).subscribe(response => {

            this.openSnackBar('Atualização efetuada!', 1);
            this.inicializaFormulario();
            this.toggleMode('VISUALIZAR');


        }, (err: HttpErrorResponse) => {

            this.openSnackBar('Erro, atualização não realizada!', 0);
        })
        this.executandoRequisicao = false;
    }

}
