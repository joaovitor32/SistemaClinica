import { Component, OnInit,Input } from '@angular/core';
import {ConsultasService} from '../../../../services/consulta/consultas.service'
import {EmpresasService} from '../../../../services/empresas/empresas.service'
import { PacienteService } from 'src/app/services/paciente/paciente.service';
import {EmpresaPacienteFuncaoService} from '../../../../services/empresa_paciente_funcao/empresa-paciente-funcao.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoConsultaService } from 'src/app/services/tipoconsulta/tipo-consulta.service';
import { RiscoService } from 'src/app/services/risco/risco.service';
import { ExameService } from 'src/app/services/exame/exame.service';
import { ConsultaExameProfissionalService } from 'src/app/services/consulta-exame-profissional/consultas-exame-profissional.service';
import { ParecerService } from 'src/app/services/parecer/parecer.service';
import { ExameRiscoService } from 'src/app/services/exame_risco/exame-risco.service';
import { CategoriaRiscoService } from 'src/app/services/categoria-risco/categoria-risco.service';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import { ConsultaParecerService } from 'src/app/services/consulta_parecer/consulta-parecer.service';
@Component({
  selector: 'app-new-aso',
  templateUrl: './new-aso.component.html',
  styleUrls: ['./new-aso.component.css']
})
export class NewAsoComponent {

  empresa;
  paciente;
  existConsulta=undefined;
  pacienteFuncao;
  consulta;
  dadosPaciente: FormGroup;
  outros: FormGroup;
  tipoconsulta=[]
  riscos=[]
  exames=[]
  examesConsulta=[]
  pareceres=[]
  categoriaRisco=[]
  constructor(
    private consultaService:ConsultasService,
    private empresaService:EmpresasService,
    private pacienteService:PacienteService,
    private empresaPacienteFuncao:EmpresaPacienteFuncaoService,
    private formBuilder: FormBuilder,
    private tipoConsultaService:TipoConsultaService,
    private riscosExameService:ExameRiscoService,
    private exameService:ExameService,
    private exameConsultaProfissionalService:ConsultaExameProfissionalService,
    private parecerService:ParecerService,
    private categoriaRiscoService:CategoriaRiscoService,
    private consultaParecerService:ConsultaParecerService
  ) { }

  iniciaDados(){
    this.dadosPaciente=this.formBuilder.group({
      cargo:[null],
      setor:[null]
    })
    this.outros=this.formBuilder.group({
      outros:[null]
    })
  }
  realoadAso(codConsulta){
    this.iniciaDados();
    this.listTipoConsulta();
    this.listExames();
    this.listParecer();
    this.listRiscos();
    this.listCatRisco();
    this.consultaService.lerConsulta(codConsulta).subscribe(consulta=>{
      if(consulta){
        this.existConsulta=true;
        this.consulta=consulta;
        this.readEmpresa(this.consulta.empresa);
        this.readPaciente(this.consulta.paciente);  
        this.readExameConsulta(this.consulta.codConsulta);      
        this.readParecerConsulta(this.consulta.codConsulta);
      }
    })  
  }
  async readEmpresa(codEmpresa){
    await this.empresaService.lerEmpresa(codEmpresa).subscribe(empresa=>{
      this.empresa=empresa;
    })
  }
  async readPaciente(codPaciente){
    await this.pacienteService.lerPaciente(codPaciente).subscribe(paciente=>{
      this.paciente=paciente;
    })
  }
  async readExameConsulta(codConsulta){
    this.examesConsulta=[]
    await this.exameConsultaProfissionalService.lerConsultas(codConsulta).subscribe(exames=>{
      let consultaObj=exames[codConsulta].cep;
      for(let i=0;i<Object.keys(consultaObj).length;i++){
        this.refatorateConsultaExames(consultaObj[i].codExame);
        this.refatorateRiscos(consultaObj[i].codExame);
      }
    })
  }
  async readParecerConsulta(codConsulta){
    this.consultaParecerService.readConsultaParecer(codConsulta).subscribe(pareceres=>{
        pareceres.forEach(parecer => {
          this.refatorateConsultaParecer(parecer.codParecer);
        });
    })
  }
  refatorateConsultaParecer(codParecer){
    this.pareceres.forEach(parecer=>{
        if(parecer.codParecer==codParecer){
          parecer['selected']=true
        }
    })
  }
  refatorateConsultaExames(codExame){
    this.exames.forEach(data=>{ 
        if(codExame==data.codExame){
          data['dataHora']=this.consulta.dataHora
      }
    })
  }
  refatorateRiscos(codExame){
    this.riscos.map(risco=>{
      if(risco.codExame==codExame){
        risco['selected']=true
      }
    })
  }
  async listTipoConsulta(){
    this.tipoconsulta=[]
    await this.tipoConsultaService.listaDeTipoConsultas().subscribe(list=>{
      list.forEach(tp=>{
        this.tipoconsulta.push(tp);
      })
    })
  }
  async listRiscos(){
    this.riscos=[]
    await this.riscosExameService.listaDeRiscos().subscribe(riscos=>{
        riscos.forEach(risco=>{
          risco['selected']=false;
          this.riscos.push(risco);
      })
    })

  }
  async listCatRisco(){
    this.categoriaRisco=[]
    await this.categoriaRiscoService.listaCategoriaRisco().subscribe(catRisco=>{
      catRisco.forEach(ct=>{
        this.categoriaRisco.push(ct);
      })
    })
  }
  async listExames(){
    this.exames=[]
    await this.exameService.listaDeExames().subscribe(exames=>{
      exames.forEach(exame=>{
        exame['dataHora']=null;
        this.exames.push(exame);
      })
    })
  }
  async listParecer(){
    await this.parecerService.listaParecer().subscribe(pareceres=>{
      pareceres.forEach(parecer=>{
        parecer["selected"]=false;
        this.pareceres.push(parecer)
      })
    })
  }
  gerarPdf(){
    var doc = new jsPDF('portrait', 'pt', 'a4');
    let codigoHTML=document.getElementById("major-box")

    html2canvas(codigoHTML).then(canvas=>{
      var img=canvas.toDataURL("image/png");
      doc.addImage(img,'JPEG',30,10,535 ,840);
      doc.save("Relatorio:"+this.paciente.nome+'.pdf');
    })
  }
}
