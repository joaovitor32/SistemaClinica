import { Component, OnInit } from "@angular/core";
import { SidenavComponent } from "../../sidenav/sidenav.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PacienteService } from "../../../services/paciente/paciente.service";
import { PacientesComponent } from "../../pacientes/pacientes.component";
import { PreAgendamento } from "../preagendar.component";

@Component({
    selector: "app-novo-paciente-rapido",
    templateUrl: "./novo-paciente-rapido.component.html",
    styleUrls: ["./novo-paciente-rapido.component.css"]
})
export class NovoPacienteRapidoComponent implements OnInit {
   
    formularioNovoPaciente: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private att2: PacientesComponent,
        private att: PreAgendamento,
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private pacienteService: PacienteService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.configurarFormulario();
    }

    SoLetras_Validator = '[a-zA-Z ]*';
    CPF_Validator = '(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))';
    RG_Validator = '(([0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}))'

    configurarFormulario() {
        this.formularioNovoPaciente = this.formBuilder.group({
            nome: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            cpf: [''],
            rg: [''],
            sexo: [''],
            nascimento: [''],
        });
    }

    createPaciente() {

        let form = this.formularioNovoPaciente.value;

         //Testa se algum campo não esta esta seguindo o padrão de validação 
        if (this.formularioNovoPaciente.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel cadastrar !!!", null, {
                duration: 6000,
            });
            return;
        }

        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.pacienteService.cadastrarPaciente(form).subscribe(
            response => {
                this.att.carregarPacientes();
                this.att2.carregarDadosTabela();
                this.openSnackBar("Cadastro efetuado com sucesso !!!", 1);
                this.formularioNovoPaciente.reset();
                Object.keys(this.formularioNovoPaciente.controls).forEach(
                    key => {
                        this.formularioNovoPaciente.get(key).setErrors(null);
                    }
                );
            },
            error => {
                this.openSnackBar("Erro! Cadastro não realizado.", 0);
            }
        );

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
        this._snackBar.open(mensagem, "", {
            duration: 2000,
            panelClass: nivel
        });
    }
}
