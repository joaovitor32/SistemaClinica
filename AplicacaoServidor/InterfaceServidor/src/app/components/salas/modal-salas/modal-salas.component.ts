import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SalasService } from '../../../services/salas/salas.service'
import { ExameService } from 'src/app/services/exame/exame.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExameSalaService } from '../../../services/examesala/exame-sala.service';

@Component({
    selector: 'app-modal-salas',
    templateUrl: './modal-salas.component.html'
})
export class ModalSalasComponent implements OnInit {

    formularioSala: FormGroup;
    executandoRequisicao: boolean;
    acaoModal: string;
    sala: any;
    exames = [];
    salaExame=[];
    constructor(
        public dialogRef: MatDialogRef<ModalSalasComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private salaService: SalasService,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private exameService: ExameService,
        private salasExameService: ExameSalaService,
        
    ) {
        this.acaoModal = data.acao;
    }

    onNoClick() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.carregarExames();
        this.inicializaFormulario();
        this.readSalaExame();

    }
    readSalaExame(){
        this.salaExame=[]
        this.salasExameService.readSalaExames(this.data.id).subscribe(res=>{
          Object.values(res).forEach(element => {
              this.changeCheckbox(element['codExame']);
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
        this.salaService.lerSala(this.data.id).subscribe(response => {
            this.sala = response;
            this.formularioSala = this.formBuilder.group({
                codigo: [this.sala.codSala, Validators.required],
                nome: [{
                    value: this.sala.nome,
                    disabled: this.acaoModal == 'EDITAR' ? false : true,
                }, Validators.required],
                descricao: [{
                    value: this.sala.descricao,
                    disabled: this.acaoModal == 'EDITAR' ? false : true
                }, Validators.required],
                codExames: [null, Validators.required]
            })
        })
    }
    carregarExames() {
        this.exameService.listaDeExames().subscribe(exames => {
            exames.forEach(exame => {
                this.exames.push(exame);
            })
        })
    }
    toggleMode(novaAcao) {
        this.acaoModal = novaAcao;
        switch (this.acaoModal) {
            case 'VISUALIZAR':
                for (let control in this.formularioSala.controls) {
                    this.formularioSala.get(control).disable();
                }
                break;
            case 'EDITAR':
                for (let control in this.formularioSala.controls) {
                    this.formularioSala.get(control).enable();
                }
                break;
        }
    }
    async deletarSala() {
        await this.salaService.deletarSala(this.data.id).subscribe(response => {

            this.openSnackBar('Exclusão efetuada!', 1);
            this.onNoClick();

        }, (err: HttpErrorResponse) => {
            this.openSnackBar('Erro, exclusão não efetuada', 0);
        })
        this.onNoClick();
    }
    selectedExames() {
        return this.exames
            .filter(exame => exame.checked == true)
            .map(exame => exame.codExame);
      }
    editarSala() {
        let form = this.formularioSala.value;
    
        for (let campo in form) {
            if (form[campo] == null) { return };
        }
        this.executandoRequisicao = true;

        if (this.formularioSala.invalid) {
            this._snackBar.open("Algum dado da sala está errado", null, {
              duration: 2000,
            });;
            this.executandoRequisicao = false;
            return;
          }

        this.salaService.editarSala(form).subscribe(
            data => {
                let exames=this.selectedExames();
                this.salasExameService.createSalaExame(form.codigo,exames).subscribe(data => {
                    this.openSnackBar("Atualização efetuada!", 1);
                    
                }, (err: HttpErrorResponse) => {
                    this.openSnackBar("Erro! Atualização não realizada.", 0);
                })
                this.toggleMode('VISUALIZAR');
            }, (err: HttpErrorResponse) => {
                this.openSnackBar("Erro! Atualização não realizada.", 0);
            }
        )
        this.inicializaFormulario();
        this.executandoRequisicao = false;
        this.onNoClick();
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
}
