import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConsultaService } from '../services/consulta/consulta.service'
import {FormsModule, FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  idConsulta;
  nome; 
  inicio:any="A consulta não foi iniciada";
  termino:any="A consulta não foi concluida";
  message;
  statusButton=false;

  readConsulta=[];
  dadosConsulta:FormGroup;

  constructor(
    private activatedRoute:ActivatedRoute,
    private consultaService:ConsultaService,
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    this.carregarDados();
    this.carregarDadosConsulta();
    this.configurarFormulario();
  }
  carregarDados(){
    this.consultaService.currentComando.subscribe(message=>{
      if(message=="CARREGAR_CONSULTA"){
        this.consultaService.currentCodConsulta.subscribe(codConsulta=>{
          this.idConsulta=codConsulta;
        })
        this.consultaService.currentNome.subscribe(nome=>{
          this.nome=nome;
        })
      }
    })
  }
  carregarDadosConsulta(){
    this.consultaService.readConsulta(this.idConsulta).subscribe(consultas=>{
      for(let consulta of consultas){
        this.readConsulta.push(consulta);
      }
    })
  }
  changeInicio(){
    this.message=null;
    let data=new Date();
    let dia=data.getUTCDate();
    let mes=data.getMonth()+1;
    let ano=data.getUTCFullYear();
    let hora=data.getHours();
    let minuto=data.getMinutes();
    this.inicio=dia + '/' + (mes++) + '/' + ano +'-'+hora+' horas'+":"+minuto+" minutos";
  }
  changeTermino(){
    let data=new Date();
    let dia=data.getUTCDate();
    let mes=data.getMonth()+1;
    let ano=data.getUTCFullYear();
    let hora=data.getHours();
    let minuto=data.getMinutes();
    this.termino=dia + '/' + (mes++) + '/' + ano +'-'+hora+' horas'+":"+minuto+" minutos";
  }
  configurarFormulario(){
    this.dadosConsulta=this.formBuilder.group({
      inicioConsulta:[null,Validators.required],
      terminoConsulta:[null,Validators.required],
      codConsulta:[null,Validators.required]
    })
  }
  updateConsulta(){
    if(this.inicio=="A consulta não foi iniciada"){
      this.message="Por favor, inicie a consulta";
      this.dadosConsulta.value.terminoConsulta=null;
    }else{ 
      this.changeTermino();
      this.message=null; 
      this.statusButton=true;
      this.dadosConsulta.value.inicioConsulta=this.inicio;
      this.dadosConsulta.value.terminoConsulta=this.termino;
      this.dadosConsulta.value.codConsulta=this.idConsulta;
    }
  }
}
