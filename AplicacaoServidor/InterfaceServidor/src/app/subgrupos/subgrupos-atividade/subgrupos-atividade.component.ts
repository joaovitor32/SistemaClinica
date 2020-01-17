import { Component, OnInit,Inject } from '@angular/core';
import { AtividadeService } from 'src/app/services/atividade/atividade.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-subgrupos-atividade',
  templateUrl: './subgrupos-atividade.component.html',
  styleUrls: ['./subgrupos-atividade.component.css']
})
export class SubgruposAtividadeComponent implements OnInit {

  atividades=[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private atividadesService:AtividadeService
  ) { }

  ngOnInit() {
    this.carregarAtividades();
  }
  carregarAtividades(){
    this.atividadesService.listaDeAtividades().subscribe(atividades=>{
      atividades.forEach(atividade=>{
        this.atividades.push(atividade)
      })
    })
  }

}
