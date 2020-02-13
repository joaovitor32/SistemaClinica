import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SalasService } from '../../services/salas/salas.service'
import { ExameService } from 'src/app/services/exame/exame.service';

@Component({
  selector: 'app-modal-salas',
  templateUrl: './modal-salas.component.html',
  styleUrls: ['./modal-salas.component.css']
})
export class ModalSalasComponent implements OnInit {

  formularioSala:FormGroup;
  executandoRequisicao:boolean;
  acaoModal:string;
  sala:any;
  exames=[];

  constructor(
    public dialogRef:MatDialogRef<ModalSalasComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private salaService:SalasService,
    private _snackBar:MatSnackBar,
    private dialog:MatDialog,
    private formBuilder:FormBuilder,
    private exameService:ExameService
  ) { 
    this.acaoModal=data.acao;
  }

  onNoClick(){
    this.dialogRef.close();
  }

  ngOnInit() {
    this.carregarExames();
    this.inicializaFormulario();
    
  }
  
  inicializaFormulario(){
    this.salaService.lerSala(this.data.id).subscribe(response=>{
      this.sala=response;
      this.formularioSala=this.formBuilder.group({
        codigo:[this.sala.codEspecialidade,Validators.required],
        nome:[{
          value:this.sala.nome,
          disabled:this.acaoModal=='EDITAR'?false:true,
        },Validators.required],
        descricao:[{
          value:this.sala.descricao,
          disabled:this.acaoModal=='EDITAR'?false:true
        },Validators.required],
        codExames:[null,Validators.required]
      })
    })
  }
  carregarExames(){
    this.exameService.listaDeExames().subscribe(exames=>{
      exames.forEach(exame=>{
        this.exames.push(exame);
      })
    })
  }
  toggleMode(novaAcao){
    this.acaoModal=novaAcao;
    switch(this.acaoModal){
      case 'VISUALIZAR':
        for(let control in this.formularioSala.controls){
          this.formularioSala.get(control).disable();
        }
      break;
      case 'EDITAR':
        for(let control in this.formularioSala.controls){
          this.formularioSala.get(control).enable();
        }
      break;
    }
  }

}
