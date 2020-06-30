import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { EmpresasService } from '../../../services/empresas/empresas.service'

@Component({
    selector: 'app-nova-empresa',
    templateUrl: './nova-empresa.component.html'
})
export class NovaEmpresaComponent implements OnInit {

    formularioNovaEmpresa: FormGroup;
    executandoRequisicao: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private empresaService: EmpresasService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sideNav.activeView = "Empresas > Nova Empresa";
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formularioNovaEmpresa = this.formBuilder.group({
            nome: [null, Validators.required],
            cnpj: [null, Validators.required],
            telefone1: [null, [Validators.required,Validators.pattern('^1\\d\\d(\\d\\d)?$|^0800 ?\\d{3} ?\\d{4}$|^(\\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d\\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d[ .-]?)?(9|9[ .-])?[2-9]\\d{3}[ .-]?\\d{4}$')]],
            telefone2: [null, Validators.pattern('^1\\d\\d(\\d\\d)?$|^0800 ?\\d{3} ?\\d{4}$|^(\\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d\\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\\d[ .-]?)?(9|9[ .-])?[2-9]\\d{3}[ .-]?\\d{4}$')],
            tipoPgto: [null, Validators.required],
            rua: [null, Validators.required],
            numero: [null, Validators.required],
            bairro: [null, Validators.required],
            cidade: [null, Validators.required],
            cep: [null,   Validators.pattern('^\\d{5}-\\d{3}$')],
            estado: [null, Validators.required]
        });
    }

    async createEmpresa() {

        let form = this.formularioNovaEmpresa.value;
        
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progresso
        this.executandoRequisicao = true;
        
        if (this.formularioNovaEmpresa.invalid) {
            this.executandoRequisicao = false;
            this._snackBar.open("Algum dado da consulta está incorreto", null, {
                duration: 2000,
            });;
            return;
        }
        //Armazenando a resposta para dar feedback ao usuário
        await this.empresaService.cadastrarEmpresa(form).subscribe(response => {
            
                this.openSnackBar("Cadastro efetuado!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.formularioNovaEmpresa.reset();
                this.configurarFormulario();
                Object.keys(this.formularioNovaEmpresa.controls).forEach(key => {
                    this.formularioNovaEmpresa.get(key).setErrors(null);
                });
             
        },(err: HttpErrorResponse) => {
            this._snackBar.open("Não foi possível cadastrar a consulta!", null, {
                duration: 2000,
            })});

        this.executandoRequisicao = false;
    }

    openSnackBar(mensagem, nivel) {
        switch (nivel) {
            case 1:
                nivel = 'alerta-sucesso';
                break;
            case 0:
                nivel = 'alerta-fracasso';
                break;
        }
        this._snackBar.open(mensagem, "", { duration: 2000, panelClass: nivel });
    }
}
