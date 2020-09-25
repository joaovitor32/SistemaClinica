import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
import { SubgrupoService } from "../../../services/subgrupo/subgrupo.service";
import { FuncaoService } from "../../../services/funcao/funcao.service";
import { funcao } from "../../../services/funcao/funcao";

@Component({
    selector: "app-modal-subgrupos",
    templateUrl: "./modal-subgrupos.component.html"
})
export class ModalSubgruposComponent implements OnInit {
    formularioSubgrupo: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    subgrupo;
    funcoes: funcao[] = [];
    funcao;
    filtroFuncoes: Observable<funcao[]>;

    constructor(
        public dialogRef: MatDialogRef<ModalSubgruposComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private subgrupoService: SubgrupoService,
        private funcaoService: FuncaoService,
        private _snackBar: MatSnackBar
    ) {
        this.acaoModal = data.acao;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.inicializaFormulario();
        this.carregarFuncoes();
        this.filtrarFuncao();
    }

    async carregarFuncoes() {
        await this.funcaoService.listaDeFuncoes().subscribe(funcoes => {
            Object.values(funcoes).forEach(func => {
                this.funcoes.push(func)
            })
            //this.filtroFuncoes = funcoes;
        });
    }

    async inicializaFormulario() {
        //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
        await this.subgrupoService.lerSubgrupo(this.data.id).subscribe(response => {
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
                        value: this.subgrupo.nomeFuncao,
                        disabled: this.acaoModal == "EDITAR" ? false : true
                    },
                    Validators.required
                ]
            });
        });
    }

    filtrarFuncao() {
        this.carregarFuncoes();
        this.filtroFuncoes = this.formularioSubgrupo.controls['funcao'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroFuncao(nome) : this.funcoes.slice()
            )
        );
    }

    private _filtroFuncao(nome: string): funcao[] {
        const filterValue = nome.toLocaleLowerCase();
        return this.funcoes.filter(
            funcao => funcao.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }
    displayAutocompleteFuncao(funcao?: funcao): string | undefined {
        return funcao ? funcao.nome : undefined;
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
        if (this.formularioSubgrupo.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Dados em vermelho incorretos ou em branco, não foi possivel atualizar !!!", null, {
                duration: 6000,
            });
            return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;
        this.subgrupoService.atualizarSubgrupo(form).subscribe(response => {
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
