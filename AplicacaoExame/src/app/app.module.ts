import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { StorageServiceModule } from "ngx-webstorage-service";

import {
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    // MatPaginatorIntl,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTooltipModule
} from "@angular/material";

import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { SelecaoComponent } from "./components/selecao/selecao.component";
import { ProcedimentoComponent } from "./components/procedimento/procedimento.component";
import { ModalProfissionalComponent } from "./components/modal-profissional/modal-profissional.component";

import { SalaService } from "./services/sala.service";
import { ConsultaService } from "./services/consulta.service";
import { ProfissionalService } from "./services/profissional.service";
import { EstadoService } from "./services/estado.service";

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        SelecaoComponent,
        ProcedimentoComponent,
        ModalProfissionalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StorageServiceModule,

        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        // MatPaginatorIntl,
        MatButtonModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatTooltipModule
    ],
    entryComponents: [ModalProfissionalComponent, ProcedimentoComponent],
    providers: [SalaService, ConsultaService, ProfissionalService, EstadoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
