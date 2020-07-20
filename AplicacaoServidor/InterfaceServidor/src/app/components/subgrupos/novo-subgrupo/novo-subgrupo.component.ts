import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SubgrupoService } from '../../../services/subgrupo/subgrupo.service';
import { FuncaoService } from '../../../services/funcao/funcao.service';
import { HttpErrorResponse } from '@angular/common/http';
interface funcao {
    codFuncao: number;
    nome: string;
    descricao: string;
  }
  
@Component({
    selector: 'app-novo-subgrupo',
    templateUrl: './novo-subgrupo.component.html'
})
export class NovoSubgrupoComponent implements OnInit {

    formularioNovoSubgrupo: FormGroup;
    executandoRequisicao: Boolean = false;
    funcaoControl = new FormControl('', Validators.required);
    funcoes: funcao[] = [];
    filtroFuncoes: Observable<funcao[]>;

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

            this.openSnackBar("Cadastro efetuado!", 1);
            // Reinicia os estados do formulário, também eliminando os erros de required
            this.formularioNovoSubgrupo.reset();
            Object.keys(this.formularioNovoSubgrupo.controls).forEach(key => {
                this.formularioNovoSubgrupo.get(key).setErrors(null);
            });

        },
            (err: HttpErrorResponse) => {
                this.openSnackBar("Não foi possível cadastrar!", 1);
            });

        this.executandoRequisicao = false;
    }
    filtrarFuncao() {
        this.filtroFuncoes = this.formularioNovoSubgrupo.controls['funcao'].valueChanges.pipe(
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
