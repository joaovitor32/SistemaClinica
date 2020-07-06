import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ExameService } from 'src/app/services/exame/exame.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { FuncaoService } from '../../../services/funcao/funcao.service';
import { FuncaoExameService } from 'src/app/services/funcao_exame/funcao-exame.service';

@Component({
  selector: 'app-modal-funcoes',
  templateUrl: './modal-funcoes.component.html'
})
export class ModalFuncoesComponent implements OnInit {

  formularioFuncao: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  funcao: any;
  exames = [];
  funcaoExame=[];
  constructor(
    public dialogRef: MatDialogRef<ModalFuncoesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private funcaoService: FuncaoService,
    private _snackBar: MatSnackBar,
    private exameService: ExameService,
    private funcaoExameService: FuncaoExameService
  ) {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.inicializaFormulario();
    this.carregarExames();
    this.readFuncaoExame();
     this.acaoModal = this.data.acao;
  }
  carregarExames() {
    this.exameService.listaDeExames().subscribe(exames => {
      exames.forEach(exame => {
        exame['checked']=false;
        this.exames.push(exame);
      })
    })
  }
  readFuncaoExame(){
    this.funcaoExame=[]
    this.funcaoExameService.readFuncaoExame(this.data.id).subscribe(res=>{
      Object.values(res).forEach(element => {
        this.changeCheckbox(element.codExame);
      });
    })
  }
  changeCheckbox(codExame) {
    for (let exame of this.exames) {
        if (exame['codExame'] === codExame) {
            exame['checked'] = true;
        }
    }
  }
  async inicializaFormulario() {
    //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
    this.funcaoService.lerFuncao(this.data.id).subscribe(response => {
      this.funcao = response;
      this.formularioFuncao = this.formBuilder.group({
        codigo: [this.funcao.codFuncao, Validators.required],
        nome: [{
          value: this.funcao.nome,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        descricao: [{
          value: this.funcao.descricao,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        setor: [{
          value: this.funcao.setor,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        codExames: [false, Validators.required]
      });
    });
  }
  selectedExames() {
    return this.exames
      .filter(exame => exame.checked == true)
      .map(exame => exame.codExame);
  }
  toggleMode(novaAcao) {
    //Altera a view entre visualização e edição
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case 'VISUALIZAR':
        for (let control in this.formularioFuncao.controls) {
          this.formularioFuncao.get(control).disable();
        }
        break;
      case 'EDITAR':
        for (let control in this.formularioFuncao.controls) {
          this.formularioFuncao.get(control).enable();
        }
        break;
    }
  }

  async deletarFuncao() {
    await this.funcaoService.deletarFuncao(this.data.id)
      .subscribe(response => {
        this.openSnackBar("Exclusão efetuada!", 1);
        this.onNoClick();
      }, (err: HttpErrorResponse) => {
        this.openSnackBar("Não foi possível deletar!", 1);
      });
  }

  async editarFuncao() {
    let form = this.formularioFuncao.value;
    //Testar se algum campo está vazio
    let exames = this.selectedExames();
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.funcaoService.atualizarFuncao(form)
      .subscribe(response => {
        
          this.funcaoExameService.cadastrarFuncaoExame(form.codigo, exames).subscribe()
          this.openSnackBar("Atualização efetuada!", 1);
          this.toggleMode('VISUALIZAR');
        
        
      },(err: HttpErrorResponse) => {
        this.openSnackBar("Erro! Atualização não realizada.", 0);
    });
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
