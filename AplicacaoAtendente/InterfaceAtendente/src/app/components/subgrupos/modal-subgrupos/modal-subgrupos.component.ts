import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SubgrupoService } from "../../../services/subgrupo/subgrupo.service";

@Component({
    selector: "app-modal-subgrupos",
    templateUrl: "./modal-subgrupos.component.html"
})
export class ModalSubgruposComponent implements OnInit {
    formularioSubgrupo: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    subgrupo: any;

    constructor(
        public dialogRef: MatDialogRef<ModalSubgruposComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private subgrupoService: SubgrupoService,
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

    async inicializaFormulario() {
        //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
        this.subgrupoService.lerSubgrupo(this.data.id).subscribe(response => {
            this.subgrupo = response;
            this.formularioSubgrupo = this.formBuilder.group({
                codigo: [this.subgrupo.codSubgrupo, Validators.required],
                nome: [
                    {
                        value: this.subgrupo.nome,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                funcao: [
                    {
                        value: this.subgrupo.descricao,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ]
            });
        });
    }

    toggleMode(novaAcao) {
        //Altera a view entre visualização e edição
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case "VISUALIZAR":
                for (let control in this.formularioSubgrupo.controls) {
                    this.formularioSubgrupo.get(control).disable();
                }
                break;
            case "EDITAR":
                for (let control in this.formularioSubgrupo.controls) {
                    this.formularioSubgrupo.get(control).enable();
                }
                break;
        }
    }

    async deletarSubgrupo() {
        await this.subgrupoService
            .deletarSubgrupo(this.data.id)
            .subscribe(response => {
                if (response) {
                    this.openSnackBar("Exclusão efetuada!", 1);
                    this.onNoClick();
                } else {
                    this.openSnackBar("Erro! Exclusão não realizada.", 0);
                }
            });
    }

    editarSubgrupo() {
        let form = this.formularioSubgrupo.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;
        this.subgrupoService.atualizarSubgrupo(form).subscribe(response => {
            if (response) {
                this.openSnackBar("Atualização efetuada!", 1);
                this.inicializaFormulario();
                this.toggleMode("VISUALIZAR");
            } else {
                this.openSnackBar("Erro! Atualização não realizada.", 0);
            }
        });
        this.executandoRequisicao = false;
    }

    openSnackBar(mensagem, nivel) {
        //Feedback visual na forma de um alerta do tipo SnackBar
        switch (nivel) {
            case 1:
                nivel = "alerta-sucesso";
                break;
            case 0:
                nivel = "alerta-fracasso";
                break;
        }
        this._snackBar.open(mensagem, "", {
            duration: 2000,
            panelClass: nivel
        });
    }
}
