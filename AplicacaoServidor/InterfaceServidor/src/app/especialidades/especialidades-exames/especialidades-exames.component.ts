import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExameService } from 'src/app/services/exame/exame.service';

@Component({
  selector: 'app-especialidades-exames',
  templateUrl: './especialidades-exames.component.html',
  styleUrls: ['./especialidades-exames.component.css']
})
export class EspecialidadesExamesComponent implements OnInit {

  exames=[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private exameService:ExameService
  ) { }

  ngOnInit() {
    this.carregarExames();
  } 
  carregarExames(){
    this.exameService.listaDeExames().subscribe(exames=>{
      exames.forEach(exame=>{
        this.exames.push(exame);
      })
    })
  }
}
