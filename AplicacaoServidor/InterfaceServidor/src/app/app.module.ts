import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { EmpresasService } from './empresas/empresas.service';


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
		EmpresasService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
