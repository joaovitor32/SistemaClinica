import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ConsultaService } from "../../services/consulta.service";
import { ProfissionalService } from "../../services/profissional.service";
import { EstadoService } from "../../services/estado.service";

@Component({
    selector: "app-modal-profissional",
    templateUrl: "./modal-profissional.component.html",
    styleUrls: ["./modal-profissional.component.css"]
})
export class ModalProfissionalComponent implements OnInit {
    procedimento: any;
    profissional: any;
    estado: number;
    profissionais: Object[];

    formularioProfissional: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ModalProfissionalComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private consultaService: ConsultaService,
        private profissionalService: ProfissionalService,
        private estadoService: EstadoService,
        private _snackBar: MatSnackBar
    ) {
        this.procedimento = data.procedimento;
        this.estado = data.estado;
    }

    onNoClick(): void {
        this.dialogRef.close(false);
    }

    ngOnInit() {
        this.configurarFormulario();
        this.carregarProfissionais();
    }

    configurarFormulario(): void {
        this.formularioProfissional = this.formBuilder.group({
            profissional: [null, Validators.required]
        });
    }

    carregarProfissionais(): void {
        this.profissionalService.listaDeProfissionais().subscribe(response => {
            this.profissionais = Object.values(response);
        });
    }

    selecionaProfissional(profissional: Object): void {
        this.profissional = profissional;
    }

    concluiProcedimento(): void {
        this.estadoService.encerraEstado(this.estado).subscribe(
            data => {
                this.estadoService.criaEmEspera(this.procedimento.consulta)
                    .subscribe(
                        data => {
                            this.procedimento.profissional = this.profissional.codProfissional;

                            this.consultaService.atualizarProcedimento(this.procedimento).subscribe(
                                data => {
                                    this.openSnackBar("Exame realizado!", 1);
                                    this.dialogRef.close(true);
                                },
                                error => {
                                    this.openSnackBar("Exame não registrado!", 2);
                                    this.dialogRef.close(false);
                                }
                            );
                        }, error => {
                            this.openSnackBar("Exame não registrado!", 2);
                        });
            }, error => {
                this.openSnackBar("Exame não registrado!", 2);
            }
        )
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
