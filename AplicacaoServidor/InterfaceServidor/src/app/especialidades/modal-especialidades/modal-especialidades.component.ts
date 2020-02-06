import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EspecialidadeService } from 'src/app/services/especialidade/especialidade.service';


@Component({
  selector: 'app-modal-especialidades',
  templateUrl: './modal-especialidades.component.html',
  styleUrls: ['./modal-especialidades.component.css']
})
export class ModalEspecialidadesComponent implements OnInit {

  formularioEspecialidade:FormGroup;
  executandoRequisicao:boolean;
  acaoModal:string;
  especialidade:any;
  funcao:any;
  filtroFuncoes:any;

  constructor(
    public dialogRef:MatDialogRef<ModalEspecialidadesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder:FormBuilder,
    private especialidadeService:EspecialidadeService,
    private _snackBar:MatSnackBar,
    private dialog:MatDialog,
  ) { 
    this.acaoModal=data.acao;
  }

  onNoClick(){
    this.dialogRef.close();
  }

  ngOnInit() {
    this.inicializaFormulario();
    
  }
  inicializaFormulario(){
    this.especialidadeService.lerEspecialidade(this.data.id).subscribe(response=>{
      this.especialidade=response;
      this.formularioEspecialidade=this.formBuilder.group({
        codigo:[this.especialidade.codEspecialidade,Validators.required],
        nome:[{
          value:this.especialidade.nome,
          disabled:this.acaoModal=='EDITAR'?false:true,
        },Validators.required],
        descricao:[{
          value:this.especialidade.descricao,
          disabled:this.acaoModal=='EDITAR'?false:true
        },Validators.required]
      })
    })
  }
  toggleMode(novaAcao){
    this.acaoModal=novaAcao;
    switch(this.acaoModal){
      case 'VISUALIZAR':
        for(let control in this.formularioEspecialidade.controls){
          this.formularioEspecialidade.get(control).disable();
        }
      break;
      case 'EDITAR':
        for(let control in this.formularioEspecialidade.controls){
          this.formularioEspecialidade.get(control).enable();
        }
      break;
    }
  }
  async deletarEspecialidade(){
    await this.especialidadeService.deletarEspecialidade(this.data.id).subscribe(response=>{
      if(response){
        this.openSnackBar('Exclusão efetuada!',1);
        this.onNoClick();
      }else{
        this.openSnackBar('Erro, exclusão não efetuada',0);
      }
    })
  }
  async editarEspecialidade(){
    let form= this.formularioEspecialidade.value;
    for(let campo in form){
      if(form[campo]==null){return}
    }
    this.executandoRequisicao=true;
    this.especialidadeService.editarEspecialidade(form).subscribe(response=>{
      if(response){
        this.openSnackBar('Atualização efetuada!',1);
        this.inicializaFormulario();
        this.toggleMode('VISUALIZAR');
      }else{
        this.openSnackBar('Erro, atualização não realizada!',0);
      }
    })
  }
  openSnackBar(mensagem,nivel){
    switch(nivel){
      case 1:
        nivel="alerta-sucesso";
      break;
      case 0:
        nivel='alerta-fracasso';
      break;
    }
  }
}
