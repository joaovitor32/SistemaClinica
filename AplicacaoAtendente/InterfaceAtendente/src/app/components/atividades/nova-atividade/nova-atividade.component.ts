import { Component, OnInit } from "@angular/core";
import { SidenavComponent } from "../../sidenav/sidenav.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AtividadeService } from "../../../services/atividade/atividade.service";
import { AtividadesComponent } from "../atividades.component";
@Component({
    selector: "app-nova-atividade",
    templateUrl: "./nova-atividade.component.html",
    styleUrls: ["./nova-atividade.component.css"]
})
export class NovaAtividadeComponent implements OnInit {
    formularioNovaAtividade: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private att: AtividadesComponent,
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private atividadeService: AtividadeService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formularioNovaAtividade = this.formBuilder.group({
            nome: ['', Validators.required],
            descricao: ['', Validators.required]
        });
    }

    createAtividade() {
        let form = this.formularioNovaAtividade.value;
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo]==''){
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel cadastrar !!!", null, {
                duration: 6000,
            });
            return;
            }
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.atividadeService.cadastrarAtividade(form).subscribe(
            response => {
                this.openSnackBar("Cadastro efetuado com sucesso !!!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.formularioNovaAtividade.reset();
                this.att.ngOnInit();
                Object.keys(this.formularioNovaAtividade.controls).forEach(
                    key => {
                        this.formularioNovaAtividade.get(key).setErrors(null);
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
