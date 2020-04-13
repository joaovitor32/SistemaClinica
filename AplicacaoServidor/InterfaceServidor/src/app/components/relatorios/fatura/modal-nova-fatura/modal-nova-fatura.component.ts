import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FaturaService } from '../../../../services/fatura/fatura.service';
import { EmpresasService } from '../../../../services/empresas/empresas.service';
import { ExameService } from '../../../../services/exame/exame.service';
import { ConsultasService } from '../../../../services/consulta/consultas.service';
import { ConsultaFaturaService } from '../../../../services/consulta-fatura/consultas-fatura.service';
import { ConsultaExameProfissionalService } from '../../../../services/consulta-exame-profissional/consultas-exame-profissional.service';

export interface empresa {
    codEmpresa: number;
    nome: string;
    cnpj: string;
    telefone1: string;
    telefone2: string;
    tipoPgto: any;
}


@Component({
    selector: 'app-modal-nova-fatura',
    templateUrl: './modal-nova-fatura.component.html',
    styleUrls: ['./modal-nova-fatura.component.css']
})
export class ModalNovaFaturaComponent implements OnInit {

    formularioNovaFatura: FormGroup;
    executandoRequisicao: boolean;

    empresas: empresa[] = [];
    filteredEmpresas: Observable<empresa[]>;

    consultas: any;
    consultasFiltradas: any[];
    consultasSelecionadas: any[];

    fatura: any;

    constructor(
        public dialogRef: MatDialogRef<ModalNovaFaturaComponent>,
        private formBuilder: FormBuilder,
        private faturaService: FaturaService,
        private exameService: ExameService,
        private empresaService: EmpresasService,
        private consultaService: ConsultasService,
        private consultaFaturaService: ConsultaFaturaService,
        private consultaExameProfissionalService: ConsultaExameProfissionalService,
        private _snackBar: MatSnackBar
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.carregarEmpresas();
        this.carregarConsultas();
        this.inicializaFormulario();
        this.filtrarEmpresas();
    }

    inicializaFormulario() {
        this.formularioNovaFatura = this.formBuilder.group({
            empresa: [null, Validators.required],
            descricao: [null, Validators.required]
        });
    }

    carregarEmpresas(): void {
        this.empresaService.listaDeEmpresas().subscribe(
            data => {
                this.empresas = data;
            },
            error => {
                this.openSnackBar("Erro ao realizar operação.", 0);
            });
    }

    carregarConsultas(): void {
        this.consultaExameProfissionalService.listarConsultas().subscribe(
            data => {
                this.consultas = data;
            },
            error => {
                this.openSnackBar("Erro ao realizar operação.", 0);
            });
    }

    // Filtra e calcula o preço final da consulta
    async filtrarConsultas() {
        const empresaSelecionada = this.getEmpresaSelecionada();

        let consultasFiltradas = this.consultas.filter(consulta => (consulta.codEmpresa === empresaSelecionada && consulta.status == 0));

        // Filtra procedimentos válidos (com inicio, termino e profissional)
        consultasFiltradas = consultasFiltradas.filter(consulta => {
            consulta.procedimentos = consulta.procedimentos.filter(procedimento => procedimento.codProfissional && procedimento.termino && procedimento.inicio);

            if (consulta.procedimentos.length !== 0) return consulta;
        });

        // Calcula o preço total de cada consulta
        consultasFiltradas.map(consulta => {
            consulta.preco = 0;

            consulta.procedimentos.forEach(procedimento => {
                this.exameService.lerExame(procedimento.codExame).subscribe(
                    (data: any) => {
                        consulta.preco += parseFloat(data.preco);
                    }, error => {
                        this.openSnackBar("Erro ao realizar operação.", 0);
                    });
            });
        });

        this.consultasFiltradas = consultasFiltradas;
    }

    selecionarConsultas(consultas: string[]): void {
        const consultasSelecionadas = this.consultasFiltradas.filter(consulta => consultas.includes(consulta.codConsulta));

        let preco = 0;

        consultasSelecionadas.forEach(consulta => {
            preco += consulta.preco;
        })

        this.fatura = {
            empresa: this.getEmpresaSelecionada(),
            descricao: this.getDescricao(),
            preco,
            consultas: consultas
        }
    }

    getEmpresaSelecionada(): string {
        return this.formularioNovaFatura.controls.empresa.value.codEmpresa;
    }

    getDescricao(): string {
        return this.formularioNovaFatura.controls.descricao.value;
    }

    filtrarEmpresas() {
        this.filteredEmpresas = this.formularioNovaFatura.controls['empresa'].valueChanges.pipe(
            startWith(""),
            map(value => (typeof value === "string" ? value : value.nome)),
            map(nome =>
                nome ? this._filtroEmpresa(nome) : this.empresas.slice()
            )
        );
    }

    displayAutocompleteEmpresa(empresa?: empresa): string | undefined {
        return empresa ? empresa.nome : '';
    }

    private _filtroEmpresa(nome: string): empresa[] {
        const filterValue = nome.toLocaleLowerCase();
        return this.empresas.filter(
            empresa => empresa.nome.toLowerCase().indexOf(filterValue) === 0
        );
    }

    openSnackBar(mensagem: string, nivel: any): void {
        //Feedback visual na forma de um alerta do tipo SnackBar
        switch (nivel) {
            case 1:
                nivel = 'alerta-sucesso';
                break;
            case 0:
                nivel = 'alerta-fracasso';
                break;
        }
        this._snackBar.open(mensagem, "", { duration: 2000, panelClass: nivel });
    }

    finalizarCadastro(): void {

        this.faturaService.cadastrarFatura(
            {
                empresa: this.fatura.empresa,
                descricao: this.fatura.descricao,
                preco: this.fatura.preco
            })
            .subscribe(
                (data: any) => {
                    const codFatura = data.codFatura;

                    this.consultaFaturaService.cadastrarConsultaFatura({ codFatura, consultas: this.fatura.consultas }).subscribe(
                        data => {
                            this.fatura.consultas.forEach(codigo => {
                                this.consultaService.statusConsulta({
                                    consulta: codigo,
                                    status: 1
                                }).subscribe(data => {
                                    console.log(data);
                                });
                            });

                            this.openSnackBar("Fatura registrada com sucesso!", 1);
                        },
                        error => {
                            this.openSnackBar("Erro ao realizar operação.", 0);
                        }
                    )
                },
                error => {
                    this.openSnackBar("Erro ao realizar operação.", 0);
                }
            );
    }
}
