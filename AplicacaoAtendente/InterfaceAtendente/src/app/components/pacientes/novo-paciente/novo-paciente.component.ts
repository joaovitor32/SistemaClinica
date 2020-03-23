import { Component, OnInit } from "@angular/core";
import { SidenavComponent } from "../../sidenav/sidenav.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PacienteService } from "../../../services/paciente/paciente.service";
import { PacientesComponent } from "../pacientes.component";

@Component({
    selector: "app-novo-paciente",
    templateUrl: "./novo-paciente.component.html",
    styleUrls: ["./novo-paciente.component.css"]
})
export class NovoPacienteComponent implements OnInit {
    formularioNovoPaciente: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private att: PacientesComponent,
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private pacienteService: PacienteService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formularioNovoPaciente = this.formBuilder.group({
            nome: [null, Validators.required],
            cpf: [null, Validators.required],
            rg: [null, Validators.required],
            sexo: [null, Validators.required],
            nascimento: [null, Validators.required],
        });
    }

    createPaciente() {
        let form = this.formularioNovoPaciente.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.pacienteService.cadastrarPaciente(form).subscribe(
            response => {
                this.openSnackBar("Cadastro efetuado!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.att.ngOnInit();
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
