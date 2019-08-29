import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatSidenavModule, MatListModule, MatDialog, MatDialogModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AgendadosComponent } from './agendados/agendados.component';
import { PreagendarComponent } from './preagendar/preagendar.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { ExamesComponent } from './exames/exames.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SidenavComponent,
    EmpresasComponent,
    AgendadosComponent,
    PreagendarComponent,
    FuncoesComponent,
    AtividadesComponent,
    ExamesComponent,
    PacientesComponent,
    MedicosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
