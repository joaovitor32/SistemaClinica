import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";


import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EmpresasService } from "./services/empresas/empresas.service";
import { ExameService } from "./services/exame/exame.service";
import { AtividadeService } from "./services/atividade/atividade.service";
import { FuncaoService } from "./services/funcao/funcao.service";
import { PacienteService } from "./services/paciente/paciente.service";
import { SubgrupoService } from "./services/subgrupo/subgrupo.service";
import { FaturaService } from "./services/fatura/fatura.service";
import { Interceptor } from "./services/header.interceptor";

import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

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
    MatAutocompleteModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatDialogRef
} from "@angular/material";

import { getPortuguesePaginatorIntl } from "./portuguese-paginator-initl";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmpresasComponent } from "./components/empresas/empresas.component";
import { FuncoesComponent } from "./components/funcoes/funcoes.component";
import { AtividadesComponent } from "./components/atividades/atividades.component";
import { SubgruposComponent } from "./components/subgrupos/subgrupos.component";
import { PacientesComponent } from "./components/pacientes/pacientes.component";
import { ExamesComponent } from "./components/exames/exames.component";
import { EstatisticasComponent } from "./components/estatisticas/estatisticas.component";
import { RelatoriosComponent } from "./components/relatorios/relatorios.component";

import { NovaEmpresaComponent } from "./components/empresas/nova-empresa/nova-empresa.component";
import { NovoPacienteComponent } from "./components/pacientes/novo-paciente/novo-paciente.component";
import { NovaFuncaoComponent } from "./components/funcoes/nova-funcao/nova-funcao.component";
import { NovaAtividadeComponent } from "./components/atividades/nova-atividade/nova-atividade.component";
import { NovoExameComponent } from "./components/exames/novo-exame/novo-exame.component";
import { NovoSubgrupoComponent } from "./components/subgrupos/novo-subgrupo/novo-subgrupo.component";
import { EmpresasPipe } from "./components/empresas/empresas.pipe";
import { AtividadesPipe } from "./components/atividades/atividades.pipe";
import { ExamePipe } from "./components/exames/exame.pipe";
import { PacientesPipe } from "./components/pacientes/pacientes.pipe";
import { FuncaoPipe } from "./components/funcoes/funcao.pipe";
import { ModalEmpresaComponent } from "./components/empresas/modal-empresa/modal-empresa.component";
import { ModalFuncoesComponent } from "./components/funcoes/modal-funcoes/modal-funcoes.component";
import { ModalExamesComponent } from "./components/exames/modal-exames/modal-exames.component";
import { ModalAtividadesComponent } from "./components/atividades/modal-atividades/modal-atividades.component";
import { ModalSubgruposComponent } from "./components/subgrupos/modal-subgrupos/modal-subgrupos.component";
import { ModalPacientesComponent } from "./components/pacientes/modal-pacientes/modal-pacientes.component";
import { SubgruposAtividadeComponent } from './components/subgrupos/subgrupos-atividade/subgrupos-atividade.component';
import { AtividadesSubgrupoComponent } from './components/subgrupos/modal-subgrupos/atividades-subgrupo/atividades-subgrupo.component';
import { ExamesAtividadeComponent } from './components/atividades/modal-atividades/exames-atividade/exames-atividade.component';
import { FuncaoExamesComponent } from './components/funcoes/modal-funcoes/funcao-exames/funcao-exames.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ModalEspecialidadesComponent } from './components/especialidades/modal-especialidades/modal-especialidades.component';
import { NovaEspecialidadeComponent } from './components/especialidades/nova-especialidade/nova-especialidade.component';
import { EspecialidadesExamesComponent } from './components/especialidades/especialidades-exames/especialidades-exames.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ModalConsultasComponent } from './components/consultas/modal-consultas/modal-consultas.component';
import { RiscoComponent } from './components/risco/risco.component';
import { NovoRiscoComponent } from './components/risco/novo-risco/novo-risco.component';
import { ModalRiscoComponent } from './components/risco/modal-risco/modal-risco.component';
import { ParecerComponent } from './components/parecer/parecer.component';
import { NovoParecerComponent } from './components/parecer/novo-parecer/novo-parecer.component';
import { ModalParecerComponent } from './components/parecer/modal-parecer/modal-parecer.component';
import { SalasComponent } from './components/salas/salas.component';
import { NovaSalaComponent } from './components/salas/nova-sala/nova-sala.component';
import { ModalSalasComponent } from './components/salas/modal-salas/modal-salas.component'
import { ProfissionalService } from './services/profissional/profissional.service';
import { ProfissionalComponent } from './components/profissional/profissional.component';
import { ModalProfissionalComponent } from './components/profissional/modal-profissional/modal-profissional.component';
import { NovoProfissionalComponent } from './components/profissional/novo-profissional/novo-profissional.component';
import { FaturaComponent } from './components/relatorios/fatura/fatura.component';
import { ModalFaturaComponent } from './components/relatorios/fatura/modal-fatura/modal-fatura.component';
import { ModalNovaFaturaComponent } from './components/relatorios/fatura/modal-nova-fatura/modal-nova-fatura.component';
import { ASOComponent } from './components/relatorios/aso/aso.component';
import { NewAsoComponent } from './components/relatorios/aso/new-aso/new-aso.component';
import { StorageServiceModule } from "ngx-webstorage-service";

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        EmpresasComponent,
        FuncoesComponent,
        AtividadesComponent,
        SubgruposComponent,
        PacientesComponent,
        ExamesComponent,
        EstatisticasComponent,
        RelatoriosComponent,
        ProfissionalComponent,

        NovaEmpresaComponent,
        NovoPacienteComponent,
        NovaFuncaoComponent,
        NovaAtividadeComponent,
        NovoExameComponent,
        NovoSubgrupoComponent,
        EmpresasPipe,
        AtividadesPipe,
        ExamePipe,
        PacientesPipe,

        FuncaoPipe,
        ModalEmpresaComponent,
        ModalFuncoesComponent,
        ModalExamesComponent,
        ModalAtividadesComponent,
        ModalSubgruposComponent,
        ModalPacientesComponent,
        SubgruposAtividadeComponent,
        AtividadesSubgrupoComponent,
        ExamesAtividadeComponent,
        FuncaoExamesComponent,
        EspecialidadesComponent,
        ModalEspecialidadesComponent,
        NovaEspecialidadeComponent,
        EspecialidadesExamesComponent,
        ConsultasComponent,
        ModalConsultasComponent,
        RiscoComponent,
        NovoRiscoComponent,
        ModalRiscoComponent,
        ParecerComponent,
        NovoParecerComponent,
        ModalParecerComponent,
        SalasComponent,
        NovaSalaComponent,
        ModalSalasComponent,
        ProfissionalComponent,
        ModalProfissionalComponent,
        NovoProfissionalComponent,
        FaturaComponent,
        ModalNovaFaturaComponent,
        ModalFaturaComponent,
        ASOComponent,
        NewAsoComponent
    ],
    entryComponents: [
        ModalEmpresaComponent,
        EmpresasComponent,

        ModalFuncoesComponent,
        FuncoesComponent,

        ModalAtividadesComponent,
        AtividadesComponent,

        ModalSubgruposComponent,
        SubgruposComponent,

        ModalPacientesComponent,
        PacientesComponent,

        ModalExamesComponent,
        ExamesComponent,

        SubgruposAtividadeComponent,

        ModalEspecialidadesComponent,
        ModalRiscoComponent,

        ModalParecerComponent,

        ModalSalasComponent,

        ModalProfissionalComponent,

        FaturaComponent,
        ModalNovaFaturaComponent,
        ModalFaturaComponent,
        NewAsoComponent,
        ModalConsultasComponent
       
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

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
        MatSnackBarModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatExpansionModule,
        MatTabsModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatStepperModule,
        StorageServiceModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        },*/
        { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
        EmpresasService,
        ExameService,
        AtividadeService,
        FuncaoService,
        ProfissionalService,
        PacienteService,
        SubgrupoService,
        FaturaService,
        { provide:MatDialogRef, useValue: {} },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
