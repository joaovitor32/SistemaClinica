import { Component, OnInit } from '@angular/core';
import { AtividadeService } from 'src/app/services/atividade/atividade.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-atividades-subgrupo',
  templateUrl: './atividades-subgrupo.component.html',
  styleUrls: ['./atividades-subgrupo.component.css']
})
export class AtividadesSubgrupoComponent implements OnInit {

  formularioAtividadesSubrupo:FormGroup;
  atividades=[];

  constructor(
    private atividadesService:AtividadeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.configurarFormulario();
    this.carregarAtividades();
  }
  configurarFormulario(){
    this.formularioAtividadesSubrupo=this.formBuilder.group({
      codAtividades:[null,Validators.required],
    })
  }
  carregarAtividades(){
    this.atividadesService.listaDeAtividades().subscribe(atividades=>{
      atividades.forEach(atividade=>{
        this.atividades.push(atividade);
      })
    })
  }
}
