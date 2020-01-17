import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { EspecialidadeService } from 'src/app/services/especialidade/especialidade.service';
import { ComponentsService } from 'src/app/services/components.service';


@Component({
  selector: 'app-especialidades-medico',
  templateUrl: './especialidades-medico.component.html',
  styleUrls: ['./especialidades-medico.component.css']
})
export class EspecialidadesMedicoComponent implements OnInit {

  textValue='';
  especialidades=[];
  message;
  formularioEspecialidades:FormGroup;

  constructor(
    private especialidadeService:EspecialidadeService,
    private formBuilder:FormBuilder,
    private componentService:ComponentsService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    this.checkState();
    this.carregarEspecialidades();
    this.configurarEspecialidades();
  }
  checkState(){
    this.componentService.currentEspecialidade.subscribe(message=>{
      if(message=="UPDATE_TABELA"){
        this.carregarEspecialidades();
        this.componentService.updateTabelaEspecialidades("DONT_UPDATE_TABELA")
      }
    })
  }
  configurarEspecialidades(){
    this.formularioEspecialidades=this.formBuilder.group({
      nomeEspecialidade:[null,Validators.required],
      descricao:[null,Validators.required]
    })
  }
  carregarEspecialidades(){
    this.especialidades=[];
    this.especialidadeService.listaDeEspecialidades().subscribe(especialidades=>{
      especialidades.forEach(especialidade => {
        especialidade['checked']=false,
        this.especialidades.push(especialidade)
      });
    })
  }
  applyFilter(filterValue: string) {
      this.especialidades.filter(especialidade=>{
        if(especialidade.nome.toLowerCase().match(new RegExp(filterValue))){
          especialidade.checked=true;
        }else{
          especialidade.checked=false
        };
      })
	}
}
