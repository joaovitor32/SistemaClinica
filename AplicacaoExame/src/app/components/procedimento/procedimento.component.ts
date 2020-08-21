import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalProfissionalComponent } from "../modal-profissional/modal-profissional.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ConsultaService } from "../../services/consulta.service";
import { EstadoService } from "../../services/estado.service";

import {SocketService} from '../../services/socket.service';
import { BROADCAST } from 'src/app/constants';

@Component({
    selector: "app-procedimento",
    templateUrl: "./procedimento.component.html",
    styleUrls: ["./procedimento.component.css"]
})
export class ProcedimentoComponent implements OnInit {
    consulta: any;
    procedimento: any;
    estado: number;
    formularioSelecao: FormGroup;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private formBuilder: FormBuilder,
        private consultaService: ConsultaService,
        private estadoService: EstadoService,
        private _snackBar: MatSnackBar,
        private sidenav: SidenavComponent,
        private socketService:SocketService
    ) {
        if (this.router.getCurrentNavigation()) {
            let consultaSelecionada = this.router.getCurrentNavigation().extras
                .state.consulta;

            consultaSelecionada.procedimentos = consultaSelecionada.cep.filter(
                (procedimento: any) => {
                    if (procedimento.termino === null) return procedimento;
                }
            );

            this.consulta = consultaSelecionada;
        } else {
            router.navigate(["exames"]);
        }
    }

    ngOnInit() {
        this.configurarFormulario();
    }

    configurarFormulario(): void {
        this.formularioSelecao = this.formBuilder.group({
            exame: [null]
        });
    }

    selecionaExame(procedimento: Object): void {
        this.procedimento = procedimento;
    }

    modificaEstado() {
        let modificadoComSucesso: boolean = true;

        this.estadoService.listaEstados(this.consulta.codConsulta)
            .subscribe(
                (data: any) => {
                    data.forEach(estado => {
                        if (estado.ativo == 1) {
                            this.estadoService.encerraEstado(estado.codEstado)
                                .subscribe(
                                    data => { modificadoComSucesso = true },
                                    error => { modificadoComSucesso = false })

                        }

                    });
                }, error => {
                    this.openSnackBar("Exame não iniciado!", 2);
                    modificadoComSucesso = false;
                }
            );

        if (!modificadoComSucesso) {
            return modificadoComSucesso;
        }

        this.estadoService.criaEmConsulta(this.consulta.codConsulta)
            .subscribe(
                (data: any) => {
                    this.estado = data.codEstado;
                    modificadoComSucesso = true;
                    this.socketService.emit('broadcast',BROADCAST);
                }, error => {
                    this.openSnackBar("Exame não iniciado!", 2);
                    modificadoComSucesso = false;
                }
            );

        return modificadoComSucesso;
    }

    setInicio(): void {
        if (!this.modificaEstado()) {
            return;
        }

        this.formularioSelecao.disable();

        const tmp_time = new Date().toISOString();
        this.procedimento.inicio = tmp_time.slice(0, 19).replace("T", " ");

        this.consultaService
            .atualizarProcedimento({
                consulta: this.consulta.codConsulta,
                exame: this.procedimento.codExame,
                profissional: null,
                inicio: this.procedimento.inicio,
                termino: null
            })
            .subscribe(
                data => {
                    this.openSnackBar("Exame iniciado!", 1);
                },
                error => {
                    this.openSnackBar("Exame não iniciado!", 2);
                }
            );
            this.socketService.emit('broadcast',BROADCAST);
    }

    setTermino(): void {
        const tmp_time = new Date().toISOString();
        this.procedimento.termino = tmp_time.slice(0, 19).replace("T", " ");

        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: "600px",
            data: {
                procedimento: {
                    consulta: this.consulta.codConsulta,
                    exame: this.procedimento.codExame,
                    profissional: null,
                    inicio: this.procedimento.inicio,
                    termino: this.procedimento.termino,
                },
                estado: this.estado
            }
        });

        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.sidenav.ngOnInit();
                this.socketService.emit('broadcast',BROADCAST);
                this.router.navigateByUrl("exames");
            } else {
                this.procedimento.termino = null;
            }
        });
    }

    openSnackBar(mensagem: string, nivel: any): void {
        //Feedback visual na forma de um alerta do tipo SnackBar
        switch (nivel) {
            case 1:
                nivel = "alerta-sucesso";
                break;
            case 0:
                nivel = "alerta-fracasso";
                break;
        }
        this._snackBar.open(mensagem, "", {
            duration: 2000,
            panelClass: nivel
        });
    }
}
