import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { EmpresasService } from "../../../services/empresas/empresas.service";

@Component({
    selector: "app-modal-empresa",
    templateUrl: "./modal-empresa.component.html"
})
export class ModalEmpresaComponent implements OnInit {
    formularioEmpresa: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    empresa: any;

    constructor(
        public dialogRef: MatDialogRef<ModalEmpresaComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private empresaService: EmpresasService,
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
    CNPJ_Validator = '(^[0-9]{2,3}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$)';
    Telefone_Validator = '^1\\d\\d(\\d\\d)?$|^0800 ?\\d{3} ?\\d{4}$|^(\\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d\\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d[ .-]?)?(9|9[ .-])?[2-9]\\d{3}[ .-]?\\d{4}$'
    Cep_Validator = '\\d{5}[-]\\d{3}$';

    isValidFormSubmitted = null;

    async inicializaFormulario() {
        //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
        this.empresaService.lerEmpresa(this.data.id).subscribe(response => {
            this.empresa = response;
            this.formularioEmpresa = this.formBuilder.group({
                codigo: [this.empresa.codEmpresa, Validators.required],
                nome: [
                    {
                        value: this.empresa.nome,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ],
                cnpj: [
                    {
                        value: this.empresa.cnpj,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.CNPJ_Validator)]
                ],
                telefone1: [
                    {
                        value: this.empresa.telefone1,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.Telefone_Validator)]
                ],
                telefone2: [
                    {
                        value: this.empresa.telefone2,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.pattern(this.Telefone_Validator)
                ],
                tipoPgto: [
                    {
                        value: this.empresa.tipoPgto,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                rua: [
                    {
                        value: this.empresa.rua,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ],
                numero: [
                    {
                        value: this.empresa.numero,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                bairro: [
                    {
                        value: this.empresa.bairro,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ],
                cidade: [
                    {
                        value: this.empresa.cidade,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ],
                cep: [
                    {
                        value: this.empresa.cep,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required, Validators.pattern(this.Cep_Validator)]
                ],
                estado: [
                    {
                        value: this.empresa.estado,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ]
            });
        });
    }

    toggleMode(novaAcao) {
        //Altera a view entre visualização e edição
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case "VISUALIZAR":
                for (let control in this.formularioEmpresa.controls) {
                    this.formularioEmpresa.get(control).disable();
                }
                break;
            case "EDITAR":
                for (let control in this.formularioEmpresa.controls) {
                    this.formularioEmpresa.get(control).enable();
                }
                break;
        }
    }

    async deletarEmpresa() {
        await this.empresaService
            .deletarEmpresa(this.data.id)
            .subscribe(response => {
                if (response) {
                    this.openSnackBar("Exclusão efetuada!", 1);
                    this.onNoClick();
                } else {
                    this.openSnackBar("Erro! Exclusão não realizada.", 0);
                }
            });
    }

    async editarEmpresa() {

        let form = this.formularioEmpresa.value;

        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo]==null){
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel concluir !!!", null, {
                duration: 6000,
            });
            return;
            }
        }

        //Testa se algum campo não esta esta seguindo o padrão de validação 
        if (this.formularioEmpresa.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel concluir !!!", null, {
                duration: 6000,
            });
            return;
        }

        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        await this.empresaService.atualizarEmpresa(form).subscribe(response => {
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
