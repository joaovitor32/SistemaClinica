import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ConsultaExameProfissionalService } from '../../services/consulta_exame_profissional/consulta-exame-profissional.service'
import {setData} from '../date'

@Component({
  selector: 'app-modal-cep',
  templateUrl: './modal-cep.component.html',
  styleUrls: ['./modal-cep.component.css']
})
export class ModalCEPComponent implements OnInit {
  tipo:string;
  exames: any= [];
  constructor(
    private cepService: ConsultaExameProfissionalService,
    public dialogRef: MatDialogRef<ModalCEPComponent>,
    @Inject(MAT_DIALOG_DATA) public data,

  ) {
    this.tipo=data.tipo;
   }

  ngOnInit() {
    this.carregarExames();
  }
  carregarExames() {
    this.cepService.readConsultaExames(this.data.id).subscribe(exames => {
      let response=Object.values(exames)[0]['cep']
      let i=0;

      while(response[i]){
        
        if(response[i].inicio){
          response[i].inicio=setData(response[i].inicio)
        }

        if(response[i].termino){
          response[i].termino=setData(response[i].termino)
        }
        
        this.exames.push(response[i])
        i++;
      }
    })
  }
}
