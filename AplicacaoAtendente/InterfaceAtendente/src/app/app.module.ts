import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatSidenavModule, MatListModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacientesComponent } from './pacientes/pacientes.component';
import { TabelaPacienteComponent } from './pacientes/tabela-paciente/tabela-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    TabelaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
