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
        private att:PreAgendamento,
        private att2 : PacientesComponent,
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
            cpf: [null],
            rg: [null],
            sexo: [null],
            nascimento: [null],
        });
    }

     async createPaciente() {
        let form = this.formularioNovoPaciente.value;

        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.pacienteService.cadastrarPaciente(form).subscribe(
            response => {
                this.att.ngOnInit();
                this.att2.carregarDadosTabela();
                this.openSnackBar("Cadastro efetuado!", 1);
                this.formularioNovoPaciente.reset(); 
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
