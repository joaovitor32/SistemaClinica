import "../polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorIntl,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
} from "@angular/material";

import {MatStepperModule} from '@angular/material/stepper';


import { getPortuguesePaginatorIntl } from "./portuguese-paginator-initl";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { ActivatedRoute, Routes } from "@angular/router";

//------------------------------- Componentes ------------------------------------

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InicioComponent } from "./components/inicio/inicio.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { EmpresasComponent } from "./components/empresas/empresas.component";
import { AgendadosComponent } from "./components/agendados/agendados.component";
import { PreAgendamento } from "./components/preagendar/preagendar.component";
import { FuncoesComponent } from "./components/funcoes/funcoes.component";
import { AtividadesComponent } from "./components/atividades/atividades.component";
import { ExamesComponent } from "./components/exames/exames.component";
import { PacientesComponent } from "./components/pacientes/pacientes.component";
import { MedicosComponent } from "./components/medicos/medicos.component";
import { SubgruposComponent } from "./components/subgrupos/subgrupos.component";
import { ProfissionaisComponent } from "./components/profissionais/profissionais.component";

//------------------------------- serviços ------------------------------------
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EmpresasService } from "./services/empresas/empresas.service";
import { FuncaoService } from "./services/funcao/funcao.service";
import { SubgrupoService } from "./services/subgrupo/subgrupo.service";
import { PacienteService } from "./services/paciente/paciente.service";
import { ExameService } from "./services/exames/exames.service";
import { AtividadeService } from "./services/atividade/atividade.service";
import { MedicoService } from "./services/medico/medico.service";
import { profissionalService } from "./services/profissional/profissional.service";
import {EstadosService} from "./services/estado/estado.service";

//------------------------------- Pipes (pesquisas) ------------------------------------

import { CheckedPipe } from "./components/preagendar/checked.pipe";
import { EmpresasPipe } from "./components/empresas/empresas.pipe";
import { FuncaoPipe } from "./components/funcoes/funcao.pipe";
import { AtividadesPipe } from "./components/atividades/atividades.pipe";
import { MedicoPipe } from "./components/medicos/medico.pipe";
import { SubgrupoPipe } from "./components/subgrupos/subgrupo.pipe";
import { PacientesPipe } from "./components/pacientes/pacientes.pipe";
import { Interceptor } from "./services/header.interceptor";
import { ExamePipe } from "./components/exames/exames.pipe";
import { ProfissionalPipe } from "./components/profissionais/profissionais.pipe";

//------------------------------- Modal (visualização) ------------------------------------

import { ModalFuncoesComponent } from "./components/funcoes/modal-funcoes/modal-funcoes.component";
import { NovaFuncaoComponent } from "./components/funcoes/nova-funcao/nova-funcao.component";
import { ModalExamesComponent } from "./components/exames/modal-exames/modal-exames.component";
import { NovoExameComponent } from "./components/exames/novo-exame/novo-exame.component";
import { ModalEmpresaComponent } from "./components/empresas/modal-empresa/modal-empresa.component";
import { NovaEmpresaComponent } from "./components/empresas/nova-empresa/nova-empresa.component";
import { ModalAtividadesComponent } from "./components/atividades/modal-atividades/modal-atividades.component";
import { NovaAtividadeComponent } from "./components/atividades/nova-atividade/nova-atividade.component";
import { ModalSubgruposComponent } from "./components/subgrupos/modal-subgrupos/modal-subgrupos.component";
import { NovoSubgrupoComponent } from "./components/subgrupos/novo-subgrupo/novo-subgrupo.component";
import { ModalPacientesComponent } from "./components/pacientes/modal-pacientes/modal-pacientes.component";
import { NovoPacienteComponent } from "./components/pacientes/novo-paciente/novo-paciente.component";
import { ModalMedicosComponent } from "./components/medicos/modal-medicos/modal-medicos.component";
import { NovaEmpresaRapidaComponent } from "./components/preagendar/nova-empresa-rapida/nova-empresa-rapida.component";

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        SidenavComponent,
        EmpresasComponent,
        AgendadosComponent,
        PreAgendamento,
        NovaEmpresaRapidaComponent,
        FuncoesComponent,
        AtividadesComponent,
        ExamesComponent,
        PacientesComponent,
        MedicosComponent,
        SubgruposComponent,
        ProfissionaisComponent,
        CheckedPipe,
        PreAgendamento,

        EmpresasPipe,
        FuncaoPipe,
        AtividadesPipe,
        MedicoPipe,
        SubgrupoPipe,
        ExamePipe,
        ProfissionalPipe,

        ModalFuncoesComponent,
        NovaFuncaoComponent,

        ModalExamesComponent,
        NovoExameComponent,

        ModalEmpresaComponent,
        NovaEmpresaComponent,

        ModalAtividadesComponent,
        NovaAtividadeComponent,

        ModalSubgruposComponent,
        NovoSubgrupoComponent,

        ModalPacientesComponent,
        NovoPacienteComponent,

        ModalMedicosComponent
    ],
    entryComponents: [
        PreAgendamento,
        NovaEmpresaRapidaComponent,
        SidenavComponent,

        ModalFuncoesComponent,
        FuncoesComponent,
        NovaFuncaoComponent,

        ModalExamesComponent,
        ExamesComponent,
        NovoExameComponent,

        ModalEmpresaComponent,
        EmpresasComponent,
        NovaEmpresaComponent,

        ModalAtividadesComponent,
        AtividadesComponent,
        NovaAtividadeComponent,

        ModalSubgruposComponent,
        SubgruposComponent,
        NovoSubgrupoComponent,

        ModalPacientesComponent,
        PacientesComponent,
        NovoPacienteComponent,

        MedicosComponent,
        ModalMedicosComponent,

        ProfissionaisComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatGridListModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatDialogModule,
        MatRadioModule,
        MatStepperModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        },
        { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
        EmpresasService,
        FuncaoService,
        SubgrupoService,
        PacienteService,
        ExameService,
        AtividadeService,
        MedicoService,
        EstadosService,
        PacientesPipe,
        profissionalService,
        PacientesComponent,
        NovoPacienteComponent,
        EmpresasComponent,
        NovaEmpresaComponent,
        NovaEmpresaRapidaComponent,
        SidenavComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
