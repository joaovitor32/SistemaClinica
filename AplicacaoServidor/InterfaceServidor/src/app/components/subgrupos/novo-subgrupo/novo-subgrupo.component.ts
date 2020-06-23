import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { SubgrupoService } from '../../../services/subgrupo/subgrupo.service';
import { FuncaoService } from '../../../services/funcao/funcao.service';

@Component({
    selector: 'app-novo-subgrupo',
    templateUrl: './novo-subgrupo.component.html'
})
export class NovoSubgrupoComponent implements OnInit {

    formularioNovoSubgrupo: FormGroup;
    executandoRequisicao: Boolean = false;
    funcaoControl = new FormControl('', Validators.required);
    funcoes: any;
    filtroFuncoes: any;

    constructor(
        private formBuilder: FormBuilder,
        public sideNav: SidenavComponent,
        private subgrupoService: SubgrupoService,
        private funcaoService: FuncaoService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sideNav.activeView = "Subgrupos > Novo Subgrupo";
        this.carregarFuncoes();
        this.configurarFormulario();
    }

    carregarFuncoes() {
        this.funcaoService.listaDeFuncoes().subscribe(funcoes => {
            this.funcoes = funcoes;
            this.filtroFuncoes = funcoes;
        });
    }

    applyFilter(filterValue: string) {
        const regex = new RegExp(filterValue, 'gi');
        this.filtroFuncoes = this.funcoes.filter(funcao => funcao.nome.match(regex));
    }

    configurarFormulario() {
        this.formularioNovoSubgrupo = this.formBuilder.group({
            nome: [null, Validators.required],
            funcao: [null, Validators.required]
        });
    }

    createSubgrupo() {
        let form = this.formularioNovoSubgrupo.value;
        console.log(form);
        //Testar se algum campo está vazio
        for (let campo in form) {
            if (form[campo] == null) return;
        }
        //Exibe a barra de progressocutandoRequisicao = true;

        //Armazenando a resposta para dar feedback ao usuário
        this.subgrupoService.cadastrarSubgrupo(form).subscribe(response => {
            if (response) {
                this.openSnackBar("Cadastro efetuado!", 1);
                // Reinicia os estados do formulário, também eliminando os erros de required
                this.formularioNovoSubgrupo.reset();
                Object.keys(this.formularioNovoSubgrupo.controls).forEach(key => {
                    this.formularioNovoSubgrupo.get(key).setErrors(null);
                });
            }
            else {
                this.openSnackBar("Erro! Cadastro não realizado.", 0);
            }
        });

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
