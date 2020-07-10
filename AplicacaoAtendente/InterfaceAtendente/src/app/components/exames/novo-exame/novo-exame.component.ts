import { Component, OnInit } from "@angular/core";
import { SidenavComponent } from "../../sidenav/sidenav.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ExameService } from "../../../services/exames/exames.service";
import { ExamesComponent } from "../exames.component";

@Component({
    selector: "app-novo-exame",
    templateUrl: "./novo-exame.component.html",
    styleUrls: ["./novo-exame.component.css"]
})
export class NovoExameComponent implements OnInit {
    formularioNovoExame: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private att: ExamesComponent,
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private exameService: ExameService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.sideNav.activeView = "Exames > Novo Exame";
        this.configurarFormulario();
    }

    SoLetras_Validator = '[a-zA-Z ]*';
    SoNumeros_Validator = '\\d+(\\.\\d+)*'


    configurarFormulario() {
        this.formularioNovoExame = this.formBuilder.group({
            nome: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            codigo: [null, Validators.required],
            preco: [null, [Validators.required,Validators.pattern(this.SoNumeros_Validator)]],
            descricao: [null, Validators.required]
        });
    }

    createExame() {
        let form = this.formularioNovoExame.value;

        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo]==null){
                this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel cadastrar !!!", null, {
                    duration: 6000,
                });
                return;
                }
        }

        //Testa se algum campo não esta esta seguindo o padrão de validação 
        if (this.formularioNovoExame.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel cadastrar !!!", null, {
                duration: 6000,
            });
            return;
        }

        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.exameService.cadastrarExame(form).subscribe(
            response => {
                this.openSnackBar("Cadastro efetuado com sucesso !!!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.formularioNovoExame.reset();
                this.att.ngOnInit();
                Object.keys(this.formularioNovoExame.controls).forEach(key => {
                    this.formularioNovoExame.get(key).setErrors(null);
                });
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
