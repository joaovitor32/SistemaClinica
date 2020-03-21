import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExameService } from 'src/app/services/exame/exame.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-exames-atividade',
    templateUrl: './exames-atividade.component.html'
})
export class ExamesAtividadeComponent implements OnInit {

    formularioExamesAtividade: FormGroup;
    exames = [];

    constructor(
        private exameService: ExameService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data,
    ) { }

    ngOnInit() {
        this.configurarFormulario();
        this.carregarExames();
    }
    configurarFormulario() {
        this.formularioExamesAtividade = this.formBuilder.group({
            codExames: [null, Validators.required]
        })
    }
    carregarExames() {
        this.exameService.listaDeExames().subscribe(exames => {
            exames.forEach(exame => {
                this.exames.push(exame);
            })
        })
    }
}
