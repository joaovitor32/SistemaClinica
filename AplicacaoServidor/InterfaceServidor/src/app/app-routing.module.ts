import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { NovaEmpresaComponent } from './components/empresas/nova-empresa/nova-empresa.component';
import { AtividadesComponent } from './components/atividades/atividades.component';
import { NovaAtividadeComponent } from './components/atividades/nova-atividade/nova-atividade.component';
import { FuncoesComponent } from './components/funcoes/funcoes.component';
import { NovaFuncaoComponent } from './components/funcoes/nova-funcao/nova-funcao.component'
import { SubgruposComponent } from './components/subgrupos/subgrupos.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { NovoPacienteComponent } from './components/pacientes/novo-paciente/novo-paciente.component';
import { ExamesComponent } from './components/exames/exames.component';
import { NovoExameComponent } from './components/exames/novo-exame/novo-exame.component';
import { NovoSubgrupoComponent } from './components/subgrupos/novo-subgrupo/novo-subgrupo.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { NovaEspecialidadeComponent } from './components/especialidades/nova-especialidade/nova-especialidade.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { RiscoComponent } from './components/risco/risco.component';
import { NovoRiscoComponent } from './components/risco/novo-risco/novo-risco.component';
import { ParecerComponent } from './components/parecer/parecer.component';
import { NovoParecerComponent } from './components/parecer/novo-parecer/novo-parecer.component';
import { SalasComponent } from './components/salas/salas.component';
import { NovaSalaComponent } from './components/salas/nova-sala/nova-sala.component';
import { ProfissionalComponent } from './components/profissional/profissional.component'
import { NovoProfissionalComponent } from './components/profissional/novo-profissional/novo-profissional.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { FaturaComponent } from './components/relatorios/fatura/fatura.component';
import {ASOComponent} from './components/relatorios/aso/aso.component'

const routes: Routes = [
    { path: '', component: EmpresasComponent },
    { path: 'empresas', component: EmpresasComponent },
    { path: 'empresas/nova', component: NovaEmpresaComponent },
    { path: 'funcoes', component: FuncoesComponent },
    { path: 'funcoes/nova', component: NovaFuncaoComponent },
    { path: 'atividades', component: AtividadesComponent },
    { path: 'atividades/nova', component: NovaAtividadeComponent },
    { path: 'subgrupos', component: SubgruposComponent },
    { path: 'subgrupos/novo', component: NovoSubgrupoComponent },
    { path: 'pacientes', component: PacientesComponent },
    { path: 'pacientes/novo', component: NovoPacienteComponent },
    { path: 'exames', component: ExamesComponent },
    { path: 'exames/novo', component: NovoExameComponent },
    { path: 'especialidades', component: EspecialidadesComponent },
    { path: 'nova/epecialidade', component: NovaEspecialidadeComponent },
    { path: 'consultas', component: ConsultasComponent },
    { path: 'risco', component: RiscoComponent },
    { path: 'novorisco', component: NovoRiscoComponent },
    { path: 'parecer', component: ParecerComponent },
    { path: 'novoparecer', component: NovoParecerComponent },
    { path: 'sala', component: SalasComponent },
    { path: 'novasala', component: NovaSalaComponent },
    { path: 'profissional', component: ProfissionalComponent },
    { path: 'novoprofissional', component: NovoProfissionalComponent },
    { path: 'estatisticas', component: EstatisticasComponent },
    { path: 'relatorios', component: RelatoriosComponent },
    { path: "relatorios/fatura", component: FaturaComponent },
    { path: "relatorios/aso", component: ASOComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
