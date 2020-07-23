import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {EstadosService} from '../../../services/estado/estado.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal-estados-agendados',
  templateUrl: './modal-estados-agendados.component.html',
  styleUrls: ['./modal-estados-agendados.component.css']
})
export class ModalEstadosAgendadosComponent implements OnInit {

  acaoModal: string;

  constructor(
    public dialogRef: MatDialogRef<ModalEstadosAgendadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private estadoService:EstadosService,
  ) {
    this.acaoModal = data.acao;
   }

  ngOnInit() {
    console.log(this.data);
  }
  onNoClick() {
    this.dialogRef.close();
  }
  mudarEstadoEmEspera() {
    this.estadoService.criaEmEspera(this.data.id).subscribe(response=>{
      this.openSnackBar("Atualização efetuada!", 1);
    },(err:HttpErrorResponse)=>{
      this.openSnackBar("Atualização não efetuada!", 0);
    })
    this.onNoClick()
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
    this._snackBar.open(mensagem, " ", { duration: 2000, panelClass: nivel });
  }
}
