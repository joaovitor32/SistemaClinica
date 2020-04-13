import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FaturaService } from '../../../../services/fatura/fatura.service';

@Component({
    selector: 'app-modal-fatura',
    templateUrl: './modal-fatura.component.html'
})
export class ModalFaturaComponent implements OnInit {

    formularioFatura: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    fatura: any;

    constructor(
        public dialogRef: MatDialogRef<ModalFaturaComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private faturaService: FaturaService,
        private _snackBar: MatSnackBar
    ) {
        this.acaoModal = data.acao;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.inicializaFormulario();
    }

    inicializaFormulario() {

        this.faturaService.lerFatura(this.data.id).subscribe(
            (response: Object) => {
                this.fatura = response;
                this.formularioFatura = this.formBuilder.group({
                    codigo: [this.fatura.codFatura, Validators.required],
                    empresa: [
                        {
                            value: this.fatura.empresa,
                            disabled: true
                        }, Validators.required
                    ],
                    dataHora: [
                        {
                            value: this.fatura.dataHora,
                            disabled: true
                        }, Validators.required
                    ],
                    valor_total: [
                        {
                            value: this.fatura.valor_total,
                            disabled: true
                        }, Validators.required
                    ],
                    descricao: [
                        {
                            value: this.fatura.descricao,
                            disabled: this.acaoModal == 'EDITAR' ? false : true
                        }, Validators.required
                    ],
                    status: [
                        {
                            value: this.fatura.pagamento == 1 ? true : false,
                            disabled: this.acaoModal == 'EDITAR' ? false : true
                        }, Validators.required
                    ]
                });
            });
    }

    toggleMode(novaAcao: string): void {
        //Altera a view entre visualização e edição
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                this.formularioFatura.disable();
                break;
            case 'EDITAR':
                this.formularioFatura.get("status").enable();
                this.formularioFatura.get("descricao").enable();
                break;
        }
    }

    editarFatura() {
        let form = this.formularioFatura.value;
        if (form["status"] == null || form["descricao"] == "") return;
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Executa a ação e fornece feedback ao usuário
        this.faturaService.atualizarFatura(form)
            .subscribe(
                data => {
                    this.openSnackBar("Atualização efetuada!", 1);
                    this.inicializaFormulario();
                    this.toggleMode('VISUALIZAR');
                },
                error => {
                    this.openSnackBar("Erro! Atualização não realizada.", 0);
                }
            );
        this.executandoRequisicao = false;
    }

    openSnackBar(mensagem: string, nivel: any): void {
        //Feedback visual na forma de um alerta do tipo SnackBar
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
