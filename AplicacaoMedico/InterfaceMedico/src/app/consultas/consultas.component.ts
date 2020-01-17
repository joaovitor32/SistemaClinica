import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultaService } from "../services/consulta/consulta.service";
import {
    FormsModule,
    FormGroup,
    FormBuilder,
    Validators
} from "@angular/forms";

@Component({
    selector: "app-consultas",
    templateUrl: "./consultas.component.html",
    styleUrls: ["./consultas.component.css"]
})
export class ConsultasComponent implements OnInit {
    idConsulta;
    nome;
    inicio: any;
    termino: any;
    message;
    statusButton = false;

    consulta: any;
    dadosConsulta: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private consultaService: ConsultaService,
        private formBuilder: FormBuilder
    ) {
        this.consulta = this.router.getCurrentNavigation().extras.state.consultaSelecionada;
    }

    ngOnInit() {
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.dadosConsulta = this.formBuilder.group({
            inicioConsulta: [null, Validators.required],
            terminoConsulta: [null, Validators.required],
            codConsulta: [null, Validators.required]
        });
    }

    changeInicio() {
        this.message = null;
        let tmp_time = new Date().toISOString();
        this.consulta.inicio = tmp_time.slice(0, 19).replace("T", " ");
    }

    changeTermino() {
        let tmp_time = new Date().toISOString();
        this.consulta.termino = tmp_time.slice(0, 19).replace("T", " ");
        setTimeout(() => {
            alert("Saindo");
            this.router.navigate(["sidenav/"]);
        }, 3000);
    }

    updateConsulta() {
        if (this.inicio == "A consulta não foi iniciada") {
            this.message = "Por favor, inicie a consulta";
            this.dadosConsulta.value.terminoConsulta = null;
        } else {
            this.changeTermino();
            this.message = null;
            this.statusButton = true;
            this.dadosConsulta.value.inicioConsulta = this.inicio;
            this.dadosConsulta.value.terminoConsulta = this.termino;
            this.dadosConsulta.value.codConsulta = this.idConsulta;
        }
    }

    carregarDados() {
        this.consultaService.currentComando.subscribe(message => {
            if (message == "CARREGAR_CONSULTA") {
                this.consultaService.currentCodConsulta.subscribe(
                    codConsulta => {
                        this.idConsulta = codConsulta;
                    }
                );
                this.consultaService.currentNome.subscribe(nome => {
                    this.nome = nome;
                });
            }
        });
    }
    carregarDadosConsulta() {
        this.consultaService
            .readConsulta(this.idConsulta)
            .subscribe(consultas => {
                for (let consulta of consultas) {
                    this.consulta.push(consulta);
                }
            });
    }
}
