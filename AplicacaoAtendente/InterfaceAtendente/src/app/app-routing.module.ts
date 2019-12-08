import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { SubgruposComponent } from './subgrupos/subgrupos.component';

// ---------------------- roteamento para cadastro-----------------------

import {NovaFuncaoComponent} from './funcoes/nova-funcao/nova-funcao.component';

const routes: Routes = [
  { path: '',component:InicioComponent},
  { path: 'inicio',component:InicioComponent},
  { path: 'sidenav',component:SidenavComponent},
  { path: 'empresas',component:EmpresasComponent},
  {path: 'agendados',component:AgendadosComponent},
  {path: 'preagendar',component:PreagendarComponent},
  {path: 'funcoes',component:FuncoesComponent},
  {path: 'atividades',component:AtividadesComponent},
  {path: 'exames',component:ExamesComponent},
  {path: 'pacientes',component:PacientesComponent},
  {path: 'medicos',component:MedicosComponent},
  {path: 'subgrupos',component:SubgruposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
