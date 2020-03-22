import { Component, Inject, OnInit } from "@angular/core";
import { FuncaoService } from "../../services/funcao/funcao.service";
import { EmpresasService } from "../../services/empresas/empresas.service";
import { SubgrupoService } from "../../services/subgrupo/subgrupo.service";
import { FuncaoexameService } from "../../services/funcaoexame/funcaoexame.service";
import { PacienteService } from "../../services/paciente/paciente.service";
import { ExameService } from "../../services/exames/exames.service";
import { TipoconsultaService } from "../../services/tipoconsulta/tipoconsulta.service";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    AbstractControl
} from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
import { paciente } from "../../services/paciente/paciente";
import { empresas } from "../../services/empresas/empresas";
import { funcao } from "../../services/funcao/funcao";
import { subgrupo } from "../../services/subgrupo/subgrupo";
import { tipoconsulta } from "../../services/tipoconsulta/tipoconsulta";

@Component({
    selector: "app-preagendar",
    templateUrl: "preagendar.component.html",
    styleUrls: ["preagendar.component.css"]
})
export class PreAgendamento {
    constructor(
        private empresaService: EmpresasService,
        private funcaoService: FuncaoService,
        private subGrupoService: SubgrupoService,
        private funcaoExameService: FuncaoexameService,
        private pacientesService: PacienteService,
        private exameService: ExameService,
        private tipoConsultaService: TipoconsultaService,
        private formBuilder: FormBuilder
    ) { }

    "use strict";
    empresas: empresas[] = [];
    funcoes: funcao[] = [];
    subGrupos: subgrupo[] = [];
    funcaoexames: any = [];
    pacientes: paciente[] = [];
    TipoConsulta: tipoconsulta[] = [];
    exames: any = [];
    selectedFunction: string = null;
    consultaName;
    firstForm:FormGroup;
    secondForm:FormGroup;
    thirdForm:FormGroup;
    exameObj;
    //Exames
    /*makeEAG:boolean=false;
	makeECG:boolean=false;
	makeAudiometria:boolean=false;
	makeProstata:boolean=false;
	makeSangue:boolean=false;
	isChecked:boolean=false;*/

    //Parte do autocomplete
    filteredPacientes: Observable<paciente[]>;
    filteredEmpresas: Observable<empresas[]>;
    filteredFuncao: Observable<funcao[]>;
    filteredSubGrupo: Observable<subgrupo[]>;

    ngOnInit() {
        this.configurarFormulario();
        this.carregarFuncoes();
        this.carregarEmpresas();
        this.carregarSubGrupos();
        this.carregarPacientes();
        this.carregarExames();
        this.carregarTipoConsulta();

        this.filtrarPacientes();
        this.filtrarEmpresas();
        this.filtrarFuncao();
        this.filtrarSubGrupo();
        
    }

    //carga de informações
    async carregarExames() {
        await this.exameService.listaDeExames().subscribe(exames => {
            for (let exame of exames) {
                (exame["checked"] = false), this.exames.push(exame);
            }
        });
    }
    async carregarEmpresas() {
        await this.empresaService.listaDeEmpresas().subscribe(empresas => {
            for (let empresa of empresas) {
                this.empresas.push(empresa);
            }
        });
    }
    async carregarFuncoes() {
        await this.funcaoService.listaDeFuncoes().subscribe(funcoes => {
            for (let funcao of funcoes) {
                this.funcoes.push(funcao);
            }
        });
    }
    async carregarSubGrupos() {
        await this.subGrupoService.listaDeSubgrupo().subscribe(subgrupos => {
            for (let subgrupo of subgrupos) {
                this.subGrupos.push(subgrupo);
            }
        });
    }
    async carregarPacientes() {
        await this.pacientesService.listaDePacientes().subscribe(pacientes => {
            for (let paciente of pacientes) {
                this.pacientes.push(paciente);
            }
        });
    }
    async carregarTipoConsulta() {
        await this.tipoConsultaService
            .listaDeTipoConsultas()
            .subscribe(tiposconsultas => {
                for (let tp of tiposconsultas) {
                    tp["checked"] = false;
                    this.TipoConsulta.push(tp);
                }
            });
    }
    //A seguir vem a lógica dnome => nome ? this._filtroPacientes(nome) : this.pacientes.slice()os autocompletes
    filtrarPacientes() {
        this.filteredPacientes = this.firstForm.controls['paciente'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroPacientes(nome) : this.pacientes.slice()
            )
        );
    }

    private _filtroPacientes(nome: string): paciente[] {
        const filterValue = nome.toLocaleLowerCase();
        return this.pacientes.filter(
            paciente => paciente.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }
    displayAutocompletePaciente(paciente?: paciente): string | undefined {
        return paciente ? paciente.nome : undefined;
    }

    filtrarEmpresas() {
        this.filteredEmpresas = this.firstForm.controls['empresa'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroEmpresa(nome) : this.empresas.slice()
            )
        );
    }

    private _filtroEmpresa(nome: string): empresas[] {
        const filterValue = nome.toLocaleLowerCase();
        return this.empresas.filter(
            empresa => empresa.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }

    displayAutocompleteEmpresa(empresa?: empresas): string | undefined {
        return empresa ? empresa.nome : undefined;
    }

    filtrarFuncao() {
        this.filteredFuncao = this.firstForm.controls['funcao'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroFuncao(nome) : this.funcoes.slice()
            )
        );
    }

    private _filtroFuncao(nome: string): funcao[] {
        const filterValue = nome.toLocaleLowerCase();
        return this.funcoes.filter(
            funcao => funcao.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }
    displayAutocompleteFuncao(funcao?: funcao): string | undefined {
        return funcao ? funcao.nome : undefined;
    }

    filtrarSubGrupo() {
        this.filteredSubGrupo = this.firstForm.controls['subgrupo'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroSubGrupo(nome) : this.subGrupos.slice()
            )
        );
    }
    private _filtroSubGrupo(nome: string): subgrupo[] {
        const filterValue = nome.toLowerCase();
        return this.subGrupos.filter(
            subgrupo => subgrupo.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }
    displayAutocompleteSubGrupo(subgrupo?: subgrupo): string | undefined {
        return subgrupo ? subgrupo.nome : undefined;
    }
    //Dados do formulário
    examesObrigatorios() {
        let selectedFunction = this.firstForm.value.funcao.codFuncao;
        for (let exame of this.exames) {
            exame["checked"] = false;
        }
        this.funcaoExameService
            .lerFuncaoEmpresa(selectedFunction)
            .subscribe(exames => {
                for (let exame of exames) {
                    if (exame["codExame"] != null) {
                        this.changeCheckbox(exame["codExame"]);
                    }
                }
            });
    }
    changeCheckbox(codExame) {
        for (let exame of this.exames) {
            if (exame["codExame"] == codExame) {
                exame["checked"] = true;
            }
        }
    }

    configurarFormulario() {
        this.firstForm = this.formBuilder.group({
            paciente: new FormControl(['', Validators.required]),
            empresa: ['', Validators.required],
            subgrupo: ['', Validators.required],
            funcao: ['', Validators.required],
        });
        this.secondForm = this.formBuilder.group({
            checkboxExames: ['', Validators.required],
            consulta: ['', Validators.required],
            dataExame: ['', Validators.required]
        });
        this.thirdForm = this.formBuilder.group({
        });
    }

   // get formArray(): AbstractControl | null { return this.formularioDados.get('formArray'); }
    /*onChangeExame(cod,nome){
        this.examesConsultaCod.push(cod)
        this.examesConsultaNome.push(nome)
    }*/
    setFormatData(){
        this.secondForm.controls.dataExame.setValue(
            this.secondForm.value.dataExame.slice(0, 19).replace("T", " ")
        );
        this.tipoConsultaService.lerTipoConsulta(this.secondForm.value.consulta).subscribe(response=>{
            this.consultaName=response.nome
        })
        this.exameObj=this.selectedExamesObj();
    }
    selectedExamesObj() {
        return this.exames
            .filter(exame => exame.checked == true)
            .map(exame => exame);    
    }
    selectedExames() {
        return this.exames
            .filter(exame => exame.checked == true)
            .map(exame => exame.codExame);    
    }
    get selectedTipoConsultas() {
        return this.TipoConsulta.filter(
            tipoconsulta => tipoconsulta["checked"] == true
        ).map(tipoconsulta => tipoconsulta["codTipoConsulta"]);
    }

    async createMessage() {
        this.secondForm.controls.checkboxExames.setValue(
            this.selectedExames()
        )
        console.log({...this.firstForm.value,...this.secondForm.value});
    }
}
