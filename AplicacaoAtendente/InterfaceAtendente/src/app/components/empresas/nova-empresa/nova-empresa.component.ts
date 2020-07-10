import { Component, OnInit } from "@angular/core";
import { SidenavComponent } from "../../sidenav/sidenav.component";

import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { EmpresasService } from "../../../services/empresas/empresas.service";
import { EmpresasComponent } from "../empresas.component";
import { error } from 'console';

@Component({
    selector: "app-nova-empresa",
    templateUrl: "./nova-empresa.component.html",
    styleUrls: ["./nova-empresa.component.css"]
})
export class NovaEmpresaComponent implements OnInit {
    formularioNovaEmpresa: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private att: EmpresasComponent,
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private empresaService: EmpresasService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.sideNav.activeView = "Empresas > Nova Empresa";
        this.configurarFormulario();
    }

    SoLetras_Validator = '[a-zA-Z ]*';
    CNPJ_Validator = '(^[0-9]{2,3}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$)';
    Telefone_Validator = '^1\\d\\d(\\d\\d)?$|^0800 ?\\d{3} ?\\d{4}$|^(\\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d\\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d[ .-]?)?(9|9[ .-])?[2-9]\\d{3}[ .-]?\\d{4}$'
    Cep_Validator = '\\d{5}[-]\\d{3}$';

    isValidFormSubmitted = null;

    configurarFormulario() {
        this.formularioNovaEmpresa = this.formBuilder.group({
            nome: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            cnpj: [null, [Validators.required,Validators.pattern(this.CNPJ_Validator)]],
            telefone1: [null, [Validators.required,Validators.pattern(this.Telefone_Validator)]],
            telefone2: [null,Validators.pattern(this.Telefone_Validator)],
            tipoPgto: [null, Validators.required],
            rua: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            numero: [null, Validators.required],
            bairro: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            cidade: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]],
            cep: [null, [Validators.required, Validators.pattern(this.Cep_Validator)]],
            estado: [null, [Validators.required,Validators.pattern(this.SoLetras_Validator)]]
        });
    };

    createEmpresa() {
        let form = this.formularioNovaEmpresa.value;
        //Testar se algum campo está vazio----- é aqui nesse for que é pra impedir de cadastrar----- #ADICIONAR CONDIÇÂO DO PATTERN FALHAR?COMO?#
        for (let campo in form) {
            if (form[campo]==null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.empresaService.cadastrarEmpresa(form).subscribe(
            response => {
                this.openSnackBar("Cadastro efetuado!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.att.ngOnInit();
                this.formularioNovaEmpresa.reset();
                Object.keys(this.formularioNovaEmpresa.controls).forEach(
                    key => {
                        this.formularioNovaEmpresa.get(key).setErrors(null);
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
