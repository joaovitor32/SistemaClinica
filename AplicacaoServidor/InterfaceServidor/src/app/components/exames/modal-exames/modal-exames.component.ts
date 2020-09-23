import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ExameService } from '../../../services/exame/exame.service';
import {RiscoService} from '../../../services/risco/risco.service';
import {ExameRiscoService} from '../../../services/exame_risco/exame-risco.service'

@Component({
  selector: 'app-modal-exames',
  templateUrl: './modal-exames.component.html'
})
export class ModalExamesComponent implements OnInit {

  formularioExame: FormGroup;
  executandoRequisicao: boolean;
  acaoModal: string;
  exame: any;
  riscos =[] ;
  exameRisco = [];

  constructor(
    public dialogRef: MatDialogRef<ModalExamesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private exameService: ExameService,
    private _snackBar: MatSnackBar,
    private RiscoService : RiscoService,
    private ExameRiscoService :ExameRiscoService,

  ) {
    this.acaoModal = data.acao;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.inicializaFormulario();
    this.carregarRiscos();
    this.readExameRiscos();
    this.acaoModal = this.data.acao;
  }

  carregarRiscos() {
    this.RiscoService.listaDeRiscos().subscribe(riscos => {
      riscos.forEach(risco => {
        risco['checked']=false;
        this.riscos.push(risco);
      })
    })
  }

  readExameRiscos(){
    this.exameRisco=[]
    this.ExameRiscoService.readExameRisco(this.data.id).subscribe(res=>{
      Object.values(res).forEach(element => {
        this.changeCheckbox(element.codRisco);
      });
    })
  }
  
  changeCheckbox(codRisco) {
    for (let risco of this.riscos) {
        if (risco['codRisco'] === codRisco) {
            risco['checked'] = true;
        }
    }
  }

  async inicializaFormulario() {
    //Requisiçao das informações da empresa, configurando em seguida o formulário com os valores, ativando ou não o disable de acordo com a ação do modal
    this.exameService.lerExame(this.data.id).subscribe(response => {
      this.exame = response;
      this.formularioExame = this.formBuilder.group({
        codigo: [this.exame.codExame, Validators.required],
        nome: [{
          value: this.exame.nome,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        descricao: [{
          value: this.exame.descricao,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        codigo_exame: [{
          value: this.exame.codigo,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        preco: [{
          value: this.exame.preco,
          disabled: this.acaoModal == 'EDITAR' ? false : true
        }, Validators.required
        ],
        codRiscos: [false, Validators.required]
      });
    });
  }

  selectedRiscos() {
    return this.riscos
      .filter(risco => risco.checked == true)
      .map(risco => risco.codRisco);
  }

  toggleMode(novaAcao) {
    //Altera a view entre visualização e edição
    this.acaoModal = novaAcao;
    switch (this.acaoModal) {
      case 'VISUALIZAR':
        for (let control in this.formularioExame.controls) {
          this.formularioExame.get(control).disable();
        }
        break;
      case 'EDITAR':
        for (let control in this.formularioExame.controls) {
          this.formularioExame.get(control).enable();
        }
        break;
    }
  }

  async deletarExame() {
    await this.exameService.deletarExame(this.data.id)
      .subscribe(response => {

        this.openSnackBar("Exclusão efetuada!", 1);
        this.onNoClick();
      },
        (err: HttpErrorResponse) => {
          this.openSnackBar("Erro! Exclusão não realizada.", 0);
        });
  }

  async editarExame() {
    let form = this.formularioExame.value;
    //Testar se algum campo está vazio
    let riscos = this.selectedRiscos();
    for (let campo in form) {
      if (form[campo] == null) return;
    }
    //Exibe a barra de progresso
    this.executandoRequisicao = true;

    //Armazenando a resposta para dar feedback ao usuário
    this.exameService.atualizarExame(form)
      .subscribe(response => {

        this.ExameRiscoService.cadastrarExameRisco(form.codigo, riscos).subscribe()
        this.openSnackBar("Atualização efetuada!", 1);
        this.toggleMode('VISUALIZAR');

      }, (err: HttpErrorResponse) => {
        this.openSnackBar("Erro! Atualização não realizada.", 0);
      });
    this.inicializaFormulario();
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
}

