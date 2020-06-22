import { Component, Inject, OnInit } from "@angular/core";
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatSidenavModule,
    MatListModule
} from "@angular/material";
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
    FormControl
} from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
import { paciente } from "../../services/paciente/paciente";
import { OverlayModule } from "@angular/cdk/overlay";
import { empresas } from "../../services/empresas/empresas";
import { funcao } from "../../services/funcao/funcao";
import { subgrupo } from "../../services/subgrupo/subgrupo";
import { tipoconsulta } from "../../services/tipoconsulta/tipoconsulta";
import { Router } from "@angular/router";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
    opened: boolean = true;
    activeView: string;

    constructor(
        private router: Router,
        @Inject(LOCAL_STORAGE) private storage: StorageService
    ){
        if (this.router.getCurrentNavigation()) {
            router.navigate['inicio']
        }
    }   

    ngOnInit() {}
    ionViewWillEnter() {
        this.ngOnInit();
    }

    toggle() {
        this.opened = !this.opened;
    }
}
