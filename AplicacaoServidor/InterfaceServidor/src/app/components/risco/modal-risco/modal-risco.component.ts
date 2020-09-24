import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RiscoService } from '../../../services/risco/risco.service'
import { CategoriaRiscoService } from '../../../services/categoria-risco/categoria-risco.service';
import { ExameService } from '../../../services/exame/exame.service';
import { RiscoExameService } from '../../../services/exame_risco/exame-risco.service' ;
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-modal-risco',
    templateUrl: './modal-risco.component.html'
})
export class ModalRiscoComponent implements OnInit {


    formularioRisco: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    risco: any;
    categoriasRisco = [];
    exames: any ;
    exameRisco =[];

    constructor(
        public dialogRef: MatDialogRef<ModalRiscoComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private riscoService: RiscoService,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
        private categoriaRiscoService: CategoriaRiscoService,
        private ExameService : ExameService,
        private RiscoExameService : RiscoExameService
    ) {
        this.acaoModal = data.acao;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.carregarCategoriasRisco();
        this.carregarExames();
        this.readRiscoExames();
        this.inicializaFormulario();
    }
    
    carregarExames() {
        this.ExameService.listaDeExames().subscribe(exames => {
          exames.forEach(exame => {
            exame['checked']=false;
            this.exames.push(exame);
          })
        })
      }

      readRiscoExames(){
        this.exameRisco=[]
        this.RiscoExameService.readRiscoExame(this.data.id).subscribe(res=>{
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
    
    inicializaFormulario() {
        this.riscoService.lerRisco(this.data.id).subscribe(response => {
            this.risco = response;
            this.formularioRisco = this.formBuilder.group({
                codigo: [this.risco.codRisco, Validators.required],
                nome: [{
                    value: this.risco.risco,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
                descricao: [{
                    value: this.risco.descricao_risco,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
                codExames: [false, Validators.required],
                codCategoriaRisco: [this.risco.codCategoriaRisco, Validators.required],
            })
        })
    }

    selectedExames() {
        return this.exames
          .filter(exame => exame.checked == true)
          .map(exame => exame.codRisco);
      }
    
    carregarCategoriasRisco() {
        this.categoriaRiscoService.listaCategoriaRisco().subscribe(categoriarisco => {
            categoriarisco.forEach(catRisco => {
                this.categoriasRisco.push(catRisco);
            })
        })
    }
    toggleMode(novaAcao) {
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                for (let control in this.formularioRisco.controls) {
                    this.formularioRisco.get(control).disable();
                }
                break;
            case 'EDITAR':
                for (let control in this.formularioRisco.controls) {
                    this.formularioRisco.get(control).enable();
                }
                break;
        }
    }
    async editarRisco() {
        let form = this.formularioRisco.value;

        let exames = this.selectedExames();

        for (let campo in form) {
            if (form[campo] == null) { return }
        }
        this.executandoRequisicao = true;
        this.riscoService.editarRisco(form).subscribe(response => {

            this.RiscoExameService.cadastrarRiscoExame(form.codigo, exames).subscribe()
            this.openSnackBar('Atualização efetuada!', 1);
            this.toggleMode('VISUALIZAR');

        }, (err: HttpErrorResponse) => {

            this.openSnackBar('Erro, atualização não realizada!', 0);
        })
        this.inicializaFormulario();
        this.executandoRequisicao = false;
        this.onNoClick()
    }
    openSnackBar(mensagem, nivel) {
        switch (nivel) {
            case 1:
                nivel = "alerta-sucesso";
                break;
            case 0:
                nivel = 'alerta-fracasso';
                break;
        }
        this._snackBar.open(mensagem, "", { duration: 2000, panelClass: nivel });

    }
    deletarRisco(){
        this.riscoService.deletarRisco(this.formularioRisco.value.codigo).subscribe(response=>{
            this.openSnackBar('Deletado com sucesso!', 1);
        }, (err: HttpErrorResponse) => {
            this.openSnackBar('Erro, exclusão não realizada!', 0);
        });
        this.onNoClick();
    }
}
