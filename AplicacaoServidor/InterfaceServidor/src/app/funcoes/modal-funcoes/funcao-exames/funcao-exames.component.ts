import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExameService } from 'src/app/services/exame/exame.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcao-exames',
  templateUrl: './funcao-exames.component.html',
  styleUrls: ['./funcao-exames.component.css']
})
export class FuncaoExamesComponent implements OnInit {

  formularioExamesFuncao:FormGroup;
  exames=[];

  constructor(
    private exameService:ExameService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    this.configurarFormulario();
    this.carregarExames();
  }
  configurarFormulario(){
    this.formularioExamesFuncao=this.formBuilder.group({
      codExames:[null,Validators.required]
    })
  }
  carregarExames(){
    this.exameService.listaDeExames().subscribe(exames=>{
      exames.forEach(exame=>{
        this.exames.push(exame);
      })
    })
  }
}