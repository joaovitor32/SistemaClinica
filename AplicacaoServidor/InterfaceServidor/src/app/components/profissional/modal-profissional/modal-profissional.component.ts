import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SalasService } from '../../../services/salas/salas.service'
import { ExameService } from 'src/app/services/exame/exame.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfissionalService } from '../../../services/profissional/profissional.service'

@Component({
    selector: 'app-modal-profissional',
    templateUrl: './modal-profissional.component.html'
})
export class ModalProfissionalComponent implements OnInit {

    formularioProfissional: FormGroup;
    executandoRequisicao: boolean;
    profissional;
    acaoModal: string;

    constructor(
        public dialogRef: MatDialogRef<ModalProfissionalComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private salaService: SalasService,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private profissionalService: ProfissionalService
    ) {
        this.acaoModal = data.acao;
    }

    ngOnInit() {
        this.inicializaFormulario();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    inicializaFormulario() {
        this.profissionalService.lerProfissional(this.data.id).subscribe(response => {
            this.profissional = Object.values(response)[0];
            this.formularioProfissional = this.formBuilder.group({
                codigo: [this.profissional.codProfissional, Validators.required],
                nome: [
                    {
                        value: this.profissional.profissional,
                        disabled: this.acaoModal == 'EDITAR' ? false : true,
                    }, Validators.required
                ],
                cpf: [
                    {
                        value: this.profissional.cpf,
                        disabled: this.acaoModal == 'EDITAR' ? false : true,
                    }, [Validators.required,Validators.pattern('^\\d{3}\\x2E\\d{3}\\x2E\\d{3}\\x2D\\d{2}$')]
                ],
                identificacao: [
                    {
                        value: this.profissional.cpf,
                        disabled: this.acaoModal == 'EDITAR' ? false : true,
                    }, Validators.required
                ]
            })
        })
    }
    toggleMode(novaAcao) {
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                for (let control in this.formularioProfissional.controls) {
                    this.formularioProfissional.get(control).disable();
                }
                break;
            case 'EDITAR':
                for (let control in this.formularioProfissional.controls) {
                    this.formularioProfissional.get(control).enable();
                }
                break;
        }
    }

    async editarProfissional() {
        let form = this.formularioProfissional.value;
        for (let campo in form) {
            if (form[campo] == null) { return }
        }
        if (this.formularioProfissional.invalid) {
            this._snackBar.open("Algum dado do profissional está errado", null, {
              duration: 2000,
            });;
            this.executandoRequisicao = false;
            return;
          }
        this.executandoRequisicao = true;
        await this.profissionalService.atualizarProfissional(form).subscribe(response => {
            this.openSnackBar('Atualização efetuada!', 1);
            this.toggleMode('VISUALIZAR');
        }, (err: HttpErrorResponse) => {
            this.openSnackBar('Atualização não efetuada!', 0);
        })
        this.inicializaFormulario();
        this.executandoRequisicao = false;
    }

    async deletarProfissional() {
        await this.profissionalService.deletarProfissional(this.data.id).subscribe(response => {
            this.openSnackBar('Exclusão efetuada!', 1);
            this.onNoClick();
        }, (err: HttpErrorResponse) => {
            this.openSnackBar('Erro, exclusão não efetuada', 0);
        })

        this.onNoClick();
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
