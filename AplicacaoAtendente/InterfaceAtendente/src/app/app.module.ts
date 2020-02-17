import '../polyfills'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
	MatDialogModule
} from  '@angular/material';

import { getPortuguesePaginatorIntl } from './portuguese-paginator-initl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {ActivatedRoute, Routes } from '@Angular/router'

//------------------------------- Componentes ------------------------------------

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AgendadosComponent } from './agendados/agendados.component';
import { PreAgendamento } from './preagendar/preagendar.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { ExamesComponent } from './exames/exames.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { SubgruposComponent } from './subgrupos/subgrupos.component';

//------------------------------- serviços ------------------------------------
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {EmpresasService} from './services/empresas/empresas.service';
import {FuncaoService} from './services/funcao/funcao.service';
import {SubgrupoService} from './services/subgrupo/subgrupo.service';
import {PacienteService} from './services/paciente/paciente.service';
import {ExameService} from './services/exames/exames.service';
import {AtividadeService} from './services/atividade/atividade.service';
import {MedicoService} from './services/medico/medico.service';

//------------------------------- Pipes (pesquisas) ------------------------------------

import { CheckedPipe } from './preagendar/checked.pipe';
import { EmpresasPipe } from './empresas/empresas.pipe';
import { FuncaoPipe } from './funcoes/funcao.pipe';
import { AtividadesPipe } from './atividades/atividades.pipe';
import { MedicoPipe } from './medicos/medico.pipe';
import { SubgrupoPipe } from './subgrupos/subgrupo.pipe';
import { PacientesPipe } from './pacientes/pacientes.pipe';
import { Interceptor } from './services/header.interceptor';
import { ExamePipe } from './exames/exames.pipe';

//------------------------------- Modaus (visualização) ------------------------------------

import { ModalFuncoesComponent } from './funcoes/modal-funcoes/modal-funcoes.component';
import {NovaFuncaoComponent } from './funcoes/nova-funcao/nova-funcao.component';
import { ModalExamesComponent } from './exames/modal-exames/modal-exames.component';
import {NovoExameComponent } from './exames/novo-exame/novo-exame.component';
import { ModalEmpresaComponent } from './empresas/modal-empresa/modal-empresa.component';
import {NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { ModalAtividadesComponent } from './atividades/modal-atividades/modal-atividades.component';
import {NovaAtividadeComponent } from './atividades/nova-atividade/nova-atividade.component';
import { ModalSubgruposComponent } from './subgrupos/modal-subgrupos/modal-subgrupos.component';
import {NovoSubgrupoComponent } from './subgrupos/novo-subgrupo/novo-subgrupo.component';
import { ModalPacientesComponent } from './pacientes/modal-pacientes/modal-pacientes.component';
import {NovoPacienteComponent } from './pacientes/novo-paciente/novo-paciente.component';
import {ModalMedicosComponent} from './medicos/modal-medicos/modal-medicos.component'
import {NovaEmpresaRapidaComponent} from './preagendar/nova-empresa-rapida/nova-empresa-rapida.component'

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
    CheckedPipe,
    PreAgendamento,

    EmpresasPipe,
    FuncaoPipe,
    AtividadesPipe,
    MedicoPipe,
    SubgrupoPipe,
    ExamePipe,

    ModalFuncoesComponent,
    NovaFuncaoComponent ,

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

    ModalMedicosComponent,

  ],
  entryComponents:[
    PreAgendamento,
    NovaEmpresaRapidaComponent,
    SidenavComponent,
  
    ModalFuncoesComponent,
    FuncoesComponent,
    NovaFuncaoComponent ,

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
  ]
  ,
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
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule
    
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
    PacientesPipe,
    EmpresasComponent,
    NovaEmpresaComponent,
    NovaEmpresaRapidaComponent,
    SidenavComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
