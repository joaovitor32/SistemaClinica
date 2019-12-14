import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmpresasService } from './services/empresas/empresas.service';
import { ExameService } from './services/exame/exame.service'
import { AtividadeService } from './services/atividade/atividade.service'
import { FuncaoService } from './services/funcao/funcao.service'
import { MedicoService } from './services/medico/medico.service'
import { PacienteService } from './services/paciente/paciente.service'
import { SubgrupoService } from './services/subgrupo/subgrupo.service'
import { Interceptor } from './services/header.interceptor'

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

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
	MatTooltipModule
} from  '@angular/material';

import { getPortuguesePaginatorIntl } from './portuguese-paginator-initl';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresasComponent } from './empresas/empresas.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { SubgruposComponent } from './subgrupos/subgrupos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ExamesComponent } from './exames/exames.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { NovoPacienteComponent } from './pacientes/novo-paciente/novo-paciente.component';
import { NovaFuncaoComponent } from './funcoes/nova-funcao/nova-funcao.component';
import { NovaAtividadeComponent } from './atividades/nova-atividade/nova-atividade.component';
import { NovoMedicoComponent } from './medicos/novo-medico/novo-medico.component';
import { NovoExameComponent } from './exames/novo-exame/novo-exame.component';
import { NovoSubgrupoComponent } from './subgrupos/novo-subgrupo/novo-subgrupo.component';
import { EmpresasPipe } from './empresas/empresas.pipe';
import { AtividadesPipe } from './atividades/atividades.pipe';
import { ExamePipe } from './exames/exame.pipe';
import { PacientesPipe } from './pacientes/pacientes.pipe';
import { SubgrupoPipe } from './subgrupos/subgrupo.pipe';
import { MedicoPipe } from './medicos/medico.pipe';
import { FuncaoPipe } from './funcoes/funcao.pipe';
import { ModalEmpresaComponent } from './empresas/modal-empresa/modal-empresa.component';
import { ModalFuncoesComponent } from './funcoes/modal-funcoes/modal-funcoes.component';
import { ModalExamesComponent } from './exames/modal-exames/modal-exames.component';
import { ModalAtividadesComponent } from './atividades/modal-atividades/modal-atividades.component';
import { ModalSubgruposComponent } from './subgrupos/modal-subgrupos/modal-subgrupos.component';
import { ModalPacientesComponent } from './pacientes/modal-pacientes/modal-pacientes.component';
import { ModalMedicosComponent } from './medicos/modal-medicos/modal-medicos.component';




@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		EmpresasComponent,
		FuncoesComponent,
		AtividadesComponent,
		SubgruposComponent,
		PacientesComponent,
		MedicosComponent,
		ExamesComponent,
		EstatisticasComponent,
		RelatoriosComponent,
    
		NovaEmpresaComponent,
		NovoPacienteComponent,
		NovaFuncaoComponent,
		NovaAtividadeComponent,
		NovoMedicoComponent,
		NovoExameComponent,
		NovoSubgrupoComponent,
		EmpresasPipe,
		AtividadesPipe,
		ExamePipe,
		PacientesPipe,
		SubgrupoPipe,
		MedicoPipe,
		FuncaoPipe,
		ModalEmpresaComponent,
		ModalFuncoesComponent,
		ModalExamesComponent,
		ModalAtividadesComponent,
		ModalSubgruposComponent,
		ModalPacientesComponent,
		ModalMedicosComponent,


		
	],
	entryComponents:[
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

		ModalMedicosComponent,
		MedicosComponent,

		ModalExamesComponent,
		ExamesComponent,
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

		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,

	
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: Interceptor,
			multi: true
		},
		{ provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
		EmpresasService,
		ExameService,
		AtividadeService,
		FuncaoService,
		MedicoService,
		PacienteService,
		SubgrupoService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }