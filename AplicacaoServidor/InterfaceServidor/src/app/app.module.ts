import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EmpresaService } from '../services/empresa.service';


import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatSidenavModule, MatListModule } from  '@angular/material';
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
		
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSidenavModule,
		MatListModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		EmpresaService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }