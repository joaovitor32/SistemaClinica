import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExameService } from 'src/app/services/exame/exame.service';
import { AtividadeService } from '../../../services/atividade/atividade.service';
import { AtividadeExameService } from 'src/app/services/atividade_exame/atividade-exame.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal-atividades',
  templateUrl: './modal-atividades.component.html'
})
export class ModalAtividadesComponent implements OnInit {

  formularioAtividade: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  atividade: any;
  atividadeExame=[];
  exames = []
  constructor(
    public dialogRef: MatDialogRef<ModalAtividadesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private atividadeService: AtividadeService,
    private _snackBar: MatSnackBar,
    private exameService: ExameService,
    private atividadeExameService: AtividadeExameService
  ) {}
  carregarExames() {
    this.exames=[];
    this.exameService.listaDeExames().subscribe(exames => {
      exames.forEach(exame => {
        exame['checked'] = false;
        this.exames.push(exame);
      })
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectedExames() {
    return this.exames
      .filter(exame => exame.checked == true)
      .map(exame => exame.codExame);
  }
  ngOnInit() {
    this.acaoModal = this.data.acao;
    this.carregarExames();
    this.readAtividadeExame();
    this.inicializaFormulario();
  }

  async inicializaFormulario() {
    //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
    this.atividadeService.lerAtividade(this.data.id).subscribe(response => {
      this.atividade = response;
      this.formularioAtividade = this.formBuilder.group({
        codigo: [this.atividade.codAtividade, Validators.required],
        nome: [{
          value: this.atividade.nome,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        descricao: [{
          value: this.atividade.descricao,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        exames: ["", Validators.required]
      });
    });
  }
  changeCheckbox(codExame) {
    for (let exame of this.exames) {
        if (exame['codExame'] === codExame) {
            exame['checked'] = true;
        }
    }
  }
  readAtividadeExame(){
    this.atividadeExame=[]
    this.atividadeExameService.readExameAtividade(this.data.id).subscribe(res=>{
      Object.values(res).forEach(element => {
        this.changeCheckbox(element.codExame);
      });
    })
  }
  toggleMode(novaAcao) {
    //Altera a view entre visualização e edição
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case 'VISUALIZAR':
        for (let control in this.formularioAtividade.controls) {
          this.formularioAtividade.get(control).disable();
        }
        break;
      case 'EDITAR':
        for (let control in this.formularioAtividade.controls) {
          this.formularioAtividade.get(control).enable();
        }
        break;
    }
  }

  async deletarAtividade() {
    await this.atividadeService.deletarAtividade(this.data.id)
      .subscribe(response => {

        this.openSnackBar("Exclusão efetuada!", 1);
        this.onNoClick();
      }, (err: HttpErrorResponse) => {
        this.openSnackBar("Não foi possível deletar!", 1);
      }
      );
  }

  editarAtividade() {
    let form = this.formularioAtividade.value;
    //Testar se algum campo está vazio
    let exames = this.selectedExames()
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;


    //Armazenando a resposta para dar feedback ao usuário
    this.atividadeService.atualizarAtividade(form)
      .subscribe(response => {

        this.atividadeExameService.cadastrarExameAtividade(form.codigo, exames).subscribe();
        this.openSnackBar("Atualização efetuada!", 1);
        this.toggleMode('VISUALIZAR');
      }, (err: HttpErrorResponse) => {
        this.openSnackBar("Erro! Atualização não realizada.", 0);
      }
      );
    this.ngOnInit() ;
    this.executandoRequisicao = false;
    this.onNoClick();
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
}
