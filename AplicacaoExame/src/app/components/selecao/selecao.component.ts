import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { SalaService } from "../../services/sala.service";

@Component({
    selector: "app-selecao",
    templateUrl: "./selecao.component.html",
    styleUrls: ["./selecao.component.css"]
})
export class SelecaoComponent implements OnInit {
    salas: any;
    formularioSelecao: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private salaService: SalaService,
        @Inject(LOCAL_STORAGE) private storage: StorageService
    ) {
        let codigo = this.storage.get("labmed_codigo_sala");
        let nome = this.storage.get("labmed_nome_sala");

        if (codigo && nome) {
            this.router.navigate(["exames"]);
        }
    }

    ngOnInit() {
        this.carregarSalas();
        this.configurarFormulario();
    }

    carregarSalas() {
        this.salaService.listaDeSalas().subscribe(salas => {
            this.salas = salas;
        });
    }

    montaListaExames(exames) {
        let lista = "";
        exames.map(exame => {
            lista += exame.exame + ", ";
        });

        return lista.substring(0, lista.length - 2);
    }

    configurarFormulario() {
        this.formularioSelecao = this.formBuilder.group({
            sala: [null, Validators.required]
        });
    }

    selecionaSala() {
        let form = this.formularioSelecao.value;

        this.formularioSelecao.get("sala").setErrors(null);

        let nome;
        this.salas.forEach(sala => {
            if (sala.codSala === form.sala) {
                nome = sala.sala;
            }
        });
        //console.log(nome);
        this.storage.set("labmed_codigo_sala", form.sala);
        this.storage.set("labmed_nome_sala", nome);
        this.router.navigate(["exames"]);
    }
}
