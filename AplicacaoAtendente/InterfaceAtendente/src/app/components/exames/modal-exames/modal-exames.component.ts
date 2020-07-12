import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ExameService } from "../../../services/exames/exames.service";

@Component({
    selector: "app-modal-exames",
    templateUrl: "./modal-exames.component.html"
})
export class ModalExamesComponent implements OnInit {
    formularioExame: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    exame: any;

    constructor(
        public dialogRef: MatDialogRef<ModalExamesComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private exameService: ExameService,
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

    SoLetras_Validator = '[a-zA-Z ]*';
    SoNumeros_Validator = '\\d+(\\.\\d+)*'

    async inicializaFormulario() {
        //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
        this.exameService.lerExame(this.data.id).subscribe(response => {
            this.exame = response;
            console.log(response);
            this.formularioExame = this.formBuilder.group({
                codigo: [this.exame.codExame, Validators.required],
                nome: [
                    {
                        value: this.exame.nome,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                descricao: [
                    {
                        value: this.exame.descricao,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                codigo_exame: [
                    {
                        value: this.exame.codigo,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                preco: [
                    {
                        value: this.exame.preco,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoNumeros_Validator)]
                ]
            });
        });
    }

    toggleMode(novaAcao) {
        //Altera a view entre visualização e edição
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case "VISUALIZAR":
                for (let control in this.formularioExame.controls) {
                    this.formularioExame.get(control).disable();
                }
                break;
            case "EDITAR":
                for (let control in this.formularioExame.controls) {
                    this.formularioExame.get(control).enable();
                }
                break;
        }
    }

    async deletarExame() {
        await this.exameService
            .deletarExame(this.data.id)
            .subscribe(response => {
                if (response) {
                    this.openSnackBar("Exclusão efetuada!", 1);
                    this.onNoClick();
                } else {
                    this.openSnackBar("Erro! Exclusão não realizada.", 0);
                }
            });
    }

    async editarExame() {
        let form = this.formularioExame.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo]==null){
                this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel atualizar !!!", null, {
                    duration: 6000,
                });
                return;
                }
        }

        //Testa se algum campo não esta esta seguindo o padrão de validação 
        if (this.formularioExame.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel atualizar !!!", null, {
                duration: 6000,
            });
            return;
        }

        //Armazenando a resposta para dar feedback ao usuário
        this.exameService.atualizarExame(form).subscribe(response => {
            if (response) {
                this.openSnackBar("Atualização efetuada com sucesso !!!", 1);
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
