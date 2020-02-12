import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalProfissionalComponent } from "../modal-profissional/modal-profissional.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ConsultaService } from "../../services/consulta.service";

@Component({
    selector: "app-procedimento",
    templateUrl: "./procedimento.component.html",
    styleUrls: ["./procedimento.component.css"]
})
export class ProcedimentoComponent implements OnInit {
    consulta: any;
    procedimento: any;
    formularioSelecao: FormGroup;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private formBuilder: FormBuilder,
        private consultaService: ConsultaService,
        private _snackBar: MatSnackBar,
        private sidenav: SidenavComponent
    ) {
        if (this.router.getCurrentNavigation()) {
            let consultaSelecionada = this.router.getCurrentNavigation().extras
                .state.consulta;

            consultaSelecionada.procedimentos = consultaSelecionada.procedimentos.filter(
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

    setInicio(): void {
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
    }

    setTermino(): void {
        const tmp_time = new Date().toISOString();
        this.procedimento.termino = tmp_time.slice(0, 19).replace("T", " ");

        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: "600px",
            data: {
                consulta: this.consulta.codConsulta,
                exame: this.procedimento.codExame,
                profissional: null,
                inicio: this.procedimento.inicio,
                termino: this.procedimento.termino
            }
        });

        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.sidenav.ngOnInit();
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
