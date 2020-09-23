import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RiscoService } from '../../../../services/risco/risco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-risco-exames',
    templateUrl: './risco-exames.component.html'
})
export class RiscoExamesComponent implements OnInit {

    formularioExamesRisco: FormGroup;
    riscos = [];

    constructor(
        private RiscoService: RiscoService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data,
    ) { }

    ngOnInit() {
        this.configurarFormulario();
        this.carregarRiscos();
    }
    configurarFormulario() {
        this.formularioExamesRisco = this.formBuilder.group({
            codRiscos: [null, Validators.required]
        })
    }
    carregarRiscos() {
        this.RiscoService.listaDeRiscos().subscribe(riscos => {
            riscos.forEach(risco => {
                this.riscos.push(risco);
            })
        })
    }
}
