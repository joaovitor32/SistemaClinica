import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AtividadeService } from 'src/app/services/atividade/atividade.service';
import { SubgrupoService } from '../../../services/subgrupo/subgrupo.service';
import { FuncaoService } from '../../../services/funcao/funcao.service';
import { SubgruposAtividadeComponent } from '../subgrupos-atividade/subgrupos-atividade.component';
import { map, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';
import {SubgrupoAtividadeService} from '../../../services/subgrupo_atividade/subgrupo-atividade.service'
interface funcao{
  codFuncao:number;
  nome:string;
  descricao:string;
}

@Component({
  selector: 'app-modal-subgrupos',
  templateUrl: './modal-subgrupos.component.html'
})


export class ModalSubgruposComponent implements OnInit {

  formularioSubgrupo: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  subgrupo: any;
  funcoes: funcao[] = [];
  exames=[];
  filtroFuncoes: any;
  filteredFuncao: Observable<funcao[]>;
  atividades = []
  constructor(
    public dialogRef: MatDialogRef<ModalSubgruposComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private subgrupoService: SubgrupoService,
    private funcaoService: FuncaoService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private atividadesService: AtividadeService,
    private subgrupoAtividadeService:SubgrupoAtividadeService
  ) {
    this.acaoModal = data.acao;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.carregarFuncoes();
    this.carregarAtividades();
    this.inicializaFormulario()
    
  }
  carregarFuncoes() {
    this.funcaoService.listaDeFuncoes().subscribe(funcoes => {
      this.funcoes = funcoes;
      this.filtroFuncoes = funcoes;
    });
  }
  carregarAtividades() {
    this.atividadesService.listaDeAtividades().subscribe(atividades => {
      atividades.forEach(atividade => {
        atividade['checked']=false
        this.atividades.push(atividade);
      })
    })
  }
  async inicializaFormulario() {
    //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
    this.subgrupoService.lerSubgrupo(this.data.id).subscribe(response => {
      this.subgrupo = response;
      this.formularioSubgrupo = this.formBuilder.group({
        codigo: [this.subgrupo.codSubgrupo, Validators.required],
        nome: [{
          value: this.subgrupo.nome,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        funcao: [{
          value: this.subgrupo.codFuncao,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        atividades: [false, Validators.required]
      });
    });
  }
  selectedExames() {
    return this.atividades
        .filter(atividade => atividade.checked == true)
        .map(atividade => atividade.codAtividade);
  }
  toggleMode(novaAcao) {
    //Altera a view entre visualização e edição
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case 'VISUALIZAR':
        for (let control in this.formularioSubgrupo.controls) {
          this.formularioSubgrupo.get(control).disable();
        }
        break;
      case 'EDITAR':
        for (let control in this.formularioSubgrupo.controls) {
          this.formularioSubgrupo.get(control).enable();
        }
        break;
    }
  }

  async deletarSubgrupo() {
    await this.subgrupoService.deletarSubgrupo(this.data.id)
      .subscribe(response => {
        if (response) {
          this.openSnackBar("Exclusão efetuada!", 1);
          this.onNoClick();
        } else {
          this.openSnackBar("Erro! Exclusão não realizada.", 0);
        }
      }
      );
  }

  async editarSubgrupo() {
    let form = this.formularioSubgrupo.value;
    //Testar se algum campo está vazio
     for (let campo in form) {
       if (form[campo] == null) return;
     }
     const seletExames=this.selectedExames()
     //Exibe a barra de progresso
     this.executandoRequisicao = true;
 
     //Armazenando a resposta para dar feedback ao usuário
     this.subgrupoService.atualizarSubgrupo(form)
       .subscribe(response => {
         if (response) {
          this.subgrupoAtividadeService.cadastrarSubgrupo(form.codigo,seletExames).subscribe();
           this.openSnackBar("Atualização efetuada!", 1);
           this.inicializaFormulario();
           this.toggleMode('VISUALIZAR');
         } else {
           this.openSnackBar("Erro! Atualização não realizada.", 0);
         }
       }
       );
     this.executandoRequisicao = false;
  }

  openSnackBar(mensagem, nivel) {
    //Feedback visual na forma de um alerta do tipo SnackBar
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
  subgrupoAtividades() {
    let dialog = this.dialog.open(SubgruposAtividadeComponent, {
      width: '700px',
      id: this.data
    });
  }
}
