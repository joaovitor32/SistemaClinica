import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatSidenavModule, MatListModule} from '@angular/material';
import {FuncaoService} from './../services/funcao/funcao.service'
import {EmpresasService} from './../services/empresas/empresas.service';
import {SubgrupoService} from './../services/subgrupo/subgrupo.service'
import { FuncaoexameService } from '../services/funcaoexame/funcaoexame.service';
import { PacienteService} from '../services/paciente/paciente.service';
import {ExameService} from '../services/exames/exames.service';
import {TipoconsultaService} from '../services/tipoconsulta/tipoconsulta.service';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {paciente} from './../services/paciente/paciente'
import {OverlayModule} from '@angular/cdk/overlay';
import {empresas} from 	'../services/empresas/empresas'
import {funcao} from '../services/funcao/funcao'
import {subgrupo} from '../services/subgrupo/subgrupo'
import { tipoconsulta} from '../services/tipoconsulta/tipoconsulta'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened:boolean = true;
	activeView:string;

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

  	openDialog(): void {
    	const dialogRef = this.dialog.open(PreAgendamento, {
			width: '500px',
			height:'800px'
    });	

    dialogRef.afterClosed().subscribe(result => {
      		console.log('The dialog was closed');
    	});
  	}

	toggle(){
		this.opened = !this.opened;
	}
}

@Component({
	selector: 'Preagendamento',
	templateUrl: 'Preagendamento.html',
	styleUrls: ['Preagendamento.css']
  })
  export class PreAgendamento {
  
	constructor(
	  	public dialogRef: MatDialogRef<PreAgendamento>,
	  	@Inject(MAT_DIALOG_DATA) public data: any,
	  	private empresaService:EmpresasService,
	  	private funcaoService:FuncaoService,
	 	private subGrupoService:SubgrupoService,
		private funcaoExameService:FuncaoexameService,
		private pacientesService:PacienteService,
		private exameService:ExameService,
		private tipoConsultaService:TipoconsultaService,
		private formBuilder:FormBuilder
	) {}
  
	onNoClick(): void {
	  this.dialogRef.close();
	}
	"use strict";
	empresas:empresas[]=[];
	funcoes:funcao[]=[];
	subGrupos:subgrupo[]=[];
	funcaoexames:any=[];
	pacientes:paciente[]=[];
	TipoConsulta:tipoconsulta[]=[];
	exames:any=[];
	selectedFunction:string=null;

	pacienteControl=new FormControl();
	empresaControl=new FormControl();
	funcaoControl=new FormControl();
	subGrupoControl=new FormControl();
	dataControl=new FormControl();
	formularioDados:FormGroup;
	//Exames
	/*makeEAG:boolean=false;
	makeECG:boolean=false;
	makeAudiometria:boolean=false;
	makeProstata:boolean=false;
	makeSangue:boolean=false;
	isChecked:boolean=false;*/

	//Parte do autocomplete
	filteredPacientes:Observable<paciente[]>;
	filteredEmpresas:Observable<empresas[]>;
	filteredFuncao:Observable<funcao[]>;
	filteredSubGrupo:Observable<subgrupo[]>	

	ngOnInit() {
		this.carregarFuncoes();
		this.carregarEmpresas();
		this.carregarSubGrupos();
		this.carregarPacientes();
		this.carregarExames();
		this.carregarTipoConsulta();

		this.configurarFormulario();

		this.filtrarPacientes();
		this.filtrarEmpresas();
		this.filtrarFuncao();
		this.filtrarSubGrupo();
		console.log(this.filteredPacientes);
		console.log(this.filteredEmpresas);
	}
	//carga de informações
	async carregarExames(){
		await this.exameService.listaDeExames().subscribe(exames=>{
		for(let exame of exames){
			exame['checked']=false,
			this.exames.push(exame);
		}
		});
	}
	async carregarEmpresas(){
		await this.empresaService.listaDeEmpresas().subscribe(empresas=>{
		for(let empresa of empresas){
			this.empresas.push(empresa);
		}
		});
	}
	async carregarFuncoes(){
		await this.funcaoService.listaDeFuncoes().subscribe(funcoes=>{
		for(let funcao of funcoes){
			this.funcoes.push(funcao);
		}
		})
	}
	async carregarSubGrupos(){
		await this.subGrupoService.listaDeSubgrupo().subscribe(subgrupos=>{
		for(let subgrupo of subgrupos){
			this.subGrupos.push(subgrupo);
		}
		})
	}
	async carregarPacientes(){
		await this.pacientesService.listaDePacientes().subscribe(pacientes=>{
			for(let paciente of pacientes){
				this.pacientes.push(paciente);
			}
		})
	}
	async carregarTipoConsulta(){
		await this.tipoConsultaService.listaDeTipoConsultas().subscribe(tiposconsultas=>{
			for(let tp of tiposconsultas){
				tp['checked']=false;
				this.TipoConsulta.push(tp);
			}
		})
	}
	//A seguir vem a lógica dnome => nome ? this._filtroPacientes(nome) : this.pacientes.slice()os autocompletes
	filtrarPacientes(){
		this.filteredPacientes=this.pacienteControl.valueChanges.
		pipe(
		startWith(''),
		map(value => typeof value === 'string' ? value : value.nome),
		map(nome => nome ? this._filtroPacientes(nome) : this.pacientes.slice())
		);
	} 

	private _filtroPacientes(nome:string):paciente[]{
		const filterValue=nome.toLocaleLowerCase();
		return this.pacientes.filter(paciente=>paciente.nome.toLowerCase().indexOf(filterValue)===0);
	}
	displayAutocompletePaciente(paciente?:paciente):string|undefined{
		return paciente?paciente.nome:undefined;
	}
	

	filtrarEmpresas (){
		this.filteredEmpresas=this.empresaControl.valueChanges.
		pipe(
		startWith(''),
		map(value => typeof value === 'string' ? value : value.nome),
		map(nome => nome ? this._filtroEmpresa(nome) : this.empresas.slice())
		);
	} 

	private _filtroEmpresa(nome:string):empresas[]{
		const filterValue=nome.toLocaleLowerCase();
		return this.empresas.filter(empresa=>empresa.nome.toLowerCase().indexOf(filterValue)===0);
	}

	displayAutocompleteEmpresa(empresa?:empresas):string|undefined{
		return empresa?empresa.nome:undefined;
	}

	filtrarFuncao (){
		this.filteredFuncao=this.funcaoControl.valueChanges.
		pipe(
		startWith(''),
		map(value => typeof value === 'string' ? value : value.nome),
		map(nome => nome ? this._filtroFuncao(nome) : this.funcoes.slice())
		);
	} 

	private _filtroFuncao(nome:string):funcao[]{
		const filterValue=nome.toLocaleLowerCase();
		return this.funcoes.filter(funcao=>funcao.nome.toLowerCase().indexOf(filterValue)===0);
	}
	displayAutocompleteFuncao(funcao?:funcao):string|undefined{
		return funcao?funcao.nome:undefined;
	}	

	filtrarSubGrupo(){
		this.filteredSubGrupo=this.subGrupoControl.valueChanges.
		pipe(
			startWith(''),
			map(value=> typeof value==='string'?value:value.nome),
			map(nome=>nome?this._filtroSubGrupo(nome):this.subGrupos.slice()),
		)
	}
	private _filtroSubGrupo(nome:string):subgrupo[]{	
		const filterValue=nome.toLowerCase();
		return this.subGrupos.filter(subgrupo=>subgrupo.nome.toLowerCase().indexOf(filterValue)===0)
	}
	displayAutocompleteSubGrupo(subgrupo?:subgrupo):string|undefined{
		return subgrupo?subgrupo.nome:undefined;
	}
	//Dados do formulário
	async examesObrigatorios(){
		let selectedFunction=this.funcaoControl.value.codFuncao;
		for(let exame of this.exames){
			exame['checked']=false;
		}
		await this.funcaoExameService.lerFuncaoEmpresa(selectedFunction).subscribe(exames=>{
			for(let exame of exames){
				if(exame['codExame']!=null){
					this.changeCheckbox(exame['codExame']);
				}
			} 
		})
	}
	changeCheckbox(codExame){
		for(let exame of this.exames){
			if(exame['codExame']==codExame){
				exame['checked']=true;
			}
		}
	}
	configurarFormulario(){
		this.formularioDados=this.formBuilder.group({
			codPaciente:[null,Validators.required], 
			codEmpresa:[null,Validators.required], 
			codFuncao:[null,Validators.required], 
			codSubgrupo:[null,Validators.required], 
			checkboxExames:[null,Validators.required],
			checkboxTipoConsulta:[null,Validators.required],
			dataExame:[null,Validators.required]
			}
		);
	}
	get selectedExames() {
		return this.exames.filter(exame =>exame['checked']==true).map(exame=>exame['codExame'])
	}
	get selectedTipoConsultas(){
		return this.TipoConsulta.filter(tipoconsulta=>tipoconsulta['checked']==true).map(tipoconsulta=>tipoconsulta['codTipoConsulta']);
	}
	async createMessage(){
		this.formularioDados.controls.codPaciente.setValue(this.pacienteControl.value.codPaciente);
		this.formularioDados.controls.codEmpresa.setValue(this.empresaControl.value.codEmpresa);
		this.formularioDados.controls.codFuncao.setValue(this.funcaoControl.value.codFuncao);
		this.formularioDados.controls.codSubgrupo.setValue(this.subGrupoControl.value.codSubgrupo);
		this.formularioDados.controls.checkboxExames.setValue(this.selectedExames);
		this.formularioDados.controls.checkboxTipoConsulta.setValue(this.selectedTipoConsultas);
		this.formularioDados.controls.dataExame.setValue(this.dataControl.value);
		if(this.formularioDados.invalid){
			alert("Algum dado tá errado");
			console.log(this.formularioDados.value.dataExame);  
		}
		console.log(this.formularioDados.value);  
	}
  }