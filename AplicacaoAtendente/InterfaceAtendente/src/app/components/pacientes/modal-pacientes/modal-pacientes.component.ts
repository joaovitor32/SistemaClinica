import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { PacienteService } from "../../../services/paciente/paciente.service";

@Component({
    selector: "app-modal-pacientes",
    templateUrl: "./modal-pacientes.component.html"
})
export class ModalPacientesComponent implements OnInit {
    formularioPaciente: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    paciente: any;

    constructor(
        public dialogRef: MatDialogRef<ModalPacientesComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private pacienteService: PacienteService,
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
    CPF_Validator = '(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))';
    RG_Validator = '(([0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}))'

    async inicializaFormulario() {
        //Requisiçao das informações do paciente, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
        this.pacienteService.lerPaciente(this.data.id).subscribe(response => {
            this.paciente = response;
            this.formularioPaciente = this.formBuilder.group({
                codigo: [this.paciente.codPaciente, Validators.required],
                nome: [
                    {
                        value: this.paciente.nome,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.SoLetras_Validator)]
                ],
                cpf: [
                    {
                        value: this.paciente.cpf,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.CPF_Validator)]
                ],
                rg: [
                    {
                        value: this.paciente.rg,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    [Validators.required,Validators.pattern(this.RG_Validator)]
                ],
                sexo: [
                    {
                        value: this.paciente.sexo,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
                nascimento: [
                    {
                        value: this.paciente.nascimento,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ],
            });
        });
    }

    toggleMode(novaAcao) {
        //Altera a view entre visualização e edição
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case "VISUALIZAR":
                for (let control in this.formularioPaciente.controls) {
                    this.formularioPaciente.get(control).disable();
                }
                break;
            case "EDITAR":
                for (let control in this.formularioPaciente.controls) {
                    this.formularioPaciente.get(control).enable();
                }
                break;
        }
    }

    async deletarPaciente() {
        await this.pacienteService
            .deletarPaciente(this.data.id)
            .subscribe(response => {
                if (response) {
                    this.openSnackBar("Exclusão efetuada!", 1);
                    this.onNoClick();
                } else {
                    this.openSnackBar("Erro! Exclusão não realizada.", 0);
                }
            });
    }

    async editarPaciente() {
        let form = this.formularioPaciente.value;
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
        if (this.formularioPaciente.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel Atualizar !!!", null, {
                duration: 6000,
            });
            return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        await this.pacienteService.atualizarPaciente(form).subscribe(response => {
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
