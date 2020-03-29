import { Component, Inject, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from "@angular/core";
import { FuncaoService } from "../../services/funcao/funcao.service";
import { EmpresasService } from "../../services/empresas/empresas.service";
import { SubgrupoService } from "../../services/subgrupo/subgrupo.service";
import { FuncaoexameService } from "../../services/funcaoexame/funcaoexame.service";
import { PacienteService } from "../../services/paciente/paciente.service";
import { ExameService } from "../../services/exames/exames.service";
import { TipoconsultaService } from "../../services/tipoconsulta/tipoconsulta.service";
import { MatSnackBar } from '@angular/material/snack-bar';
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
import { ConsultaService } from 'src/app/services/consulta/consulta.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ConsultaExameProfissionalService } from 'src/app/services/consulta_exame_profissional/consulta-exame-profissional.service';
import { MatStepper } from '@angular/material';

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
        private formBuilder: FormBuilder,
        private cdr: ChangeDetectorRef,
        private matSnackBar: MatSnackBar,
        private consultaService: ConsultaService,
        private cepService: ConsultaExameProfissionalService
    ) { }

    "use strict";
    @ViewChild("stepper", { static: false }) stepper: MatStepper;
    empresas: empresas[] = [];
    funcoes: funcao[] = [];
    subGrupos: subgrupo[] = [];
    funcaoexames: any = [];
    pacientes: paciente[] = [];
    TipoConsulta: tipoconsulta[] = [];
    exames: any = [];
    selectedFunction: string = null;
    consultaName;
    firstForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;
    exameObj;
    dataExame;
    subgrupoValue;
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


        this.subgrupoValue = false;
        this.carregarFuncoes();
        this.carregarEmpresas();
        this.carregarPacientes();
        this.carregarExames();
        this.carregarTipoConsulta();

        this.filtrarSubGrupo();
        this.filtrarPacientes();
        this.filtrarEmpresas();
        this.filtrarFuncao();
    }

    ngAfterContentChecked(): void {
        this.cdr.detectChanges();
    }
    //carga de informações
    async carregarExames() {
        await this.exameService.listaDeExames().subscribe(exames => {
            for (let exame of exames) {
                exame['checked'] = false;
                this.exames.push(exame);
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
    async carregarSubGrupos(codFuncao) {
        this.subGrupos = new Array();
        this.filtrarSubGrupo()
        await this.subGrupoService.listaDeSubgrupo().subscribe(subgrupos => {
            for (let subgrupo of subgrupos) {
                if (subgrupo.codFuncao == codFuncao) {
                    this.subGrupos.push(subgrupo);
                }
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
    async examesObrigatorios() {
        let selectedFunction = this.firstForm.value.funcao.codFuncao;
        await this.funcaoExameService.lerFuncaoEmpresa(selectedFunction).subscribe(exames => {
            for (let exame of exames) {
                if (exame['codExame'] != null) {
                    this.changeCheckbox(exame['codExame']);
                }
            }
        })

    }
    changeCheckbox(codExame) {
        for (let exame of this.exames) {
            if (exame['codExame'] === codExame) {
                exame['checked'] = true;
            }
        }
    }

    configurarFormulario() {
        this.firstForm = this.formBuilder.group({
            paciente: ['', Validators.required],
            empresa: ['', Validators.required],
            subgrupo: [null],
            funcao: ['', Validators.required],
        });
        this.secondForm = this.formBuilder.group({
            checkboxExames: [true, Validators.required],
            consulta: ['', Validators.required],
            dataExame: ['', Validators.required]
        });
        this.thirdForm = this.formBuilder.group({
           
        });
    }

    setFormatData() {
        this.secondForm.controls.dataExame.setValue(
            this.secondForm.value.dataExame.slice(0, 19).replace("T", " ")
        );
        this.tipoConsultaService.lerTipoConsulta(this.secondForm.value.consulta).subscribe(response => {
            this.consultaName = response.nome
        })
        this.exameObj = this.selectedExamesObj();
        if( this.secondForm.value.dataExame==undefined){
            return
        }
        this.dataExame = this.secondForm.value.dataExame;
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
    subgrupoInput() {

        this.subgrupoValue = !this.subgrupoValue;
        if (this.subgrupoValue) {
            this.firstForm.addControl('subgrupo', new FormControl(null, Validators.required))
        } else {
            this.firstForm.removeControl('subgrupo');
            this.firstForm.updateValueAndValidity();
        }
    }

    reloadStepper() {
        Object.keys(this.firstForm.controls).forEach(key => {
            this.firstForm.get(key).setValue('',Validators.required);
        })

        Object.keys(this.secondForm.controls).forEach(key => {
            this.secondForm.get(key).setValue('',Validators.required);
        });

        Object.keys(this.firstForm.controls).forEach(key => {
            this.firstForm.get(key).setErrors(null);
        });

        Object.keys(this.secondForm.controls).forEach(key => {
            this.secondForm.get(key).setErrors(null);
        });

        this.exames=[];
        this.carregarExames();
        this.secondForm.controls['checkboxExames'].setValue(true);

        this.stepper.selectedIndex = 0;
        this.stepper.linear=true;
        
        this.stepper._steps.forEach(step=>{
            step.completed=false,
            step.stepControl.markAsPending()
        })
        
    }

    async alocarProfissionalExame(consulta, exames) {
        await this.cepService.alocarProfissionalExame(consulta.codConsulta, exames).subscribe(response => {
            this.reloadStepper();
        }, (err: HttpErrorResponse) => {
            this.matSnackBar.open("Não foi possível alocar um profissional para o exame!", null, {
                duration: 2000,
            });;
        })
    }

    async createMessage() {


        this.secondForm.controls['checkboxExames'].setValue(
            this.selectedExames()
        )
        if (this.firstForm.invalid) {
            this.matSnackBar.open("Algum dado inicial está incorreto", null, {
                duration: 2000,
            });;
            return;
        }
        if (this.secondForm.invalid) {
            this.matSnackBar.open("Algum dado da consulta está incorreto", null, {
                duration: 2000,
            });;
            return;
        }

        await this.consultaService.cadastrarConsulta(this.firstForm.value, this.secondForm.value).subscribe(response => {
            this.alocarProfissionalExame(response, this.secondForm.value.checkboxExames)
            this.matSnackBar.open("Consulta cadastrada com sucesso!", null, {
                duration: 2000,
            });;
        }, (err: HttpErrorResponse) => {
            this.matSnackBar.open("Não foi possível cadastrar a consulta!", null, {
                duration: 2000,
            });;
        })
    }
}

