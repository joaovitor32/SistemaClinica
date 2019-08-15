import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { AtividadesComponent } from './atividades/atividades.component';
import {NovaAtividadeComponent} from './atividades/nova-atividade/nova-atividade.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import {NovaFuncaoComponent} from './funcoes/nova-funcao/nova-funcao.component'
import { SubgruposComponent } from './subgrupos/subgrupos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import {NovoPacienteComponent} from './pacientes/novo-paciente/novo-paciente.component';
import { MedicosComponent } from './medicos/medicos.component';
import {NovoMedicoComponent} from './medicos/novo-medico/novo-medico.component';
import { ExamesComponent } from './exames/exames.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { NovoExameComponent } from './exames/novo-exame/novo-exame.component';


const routes: Routes = [
	{ path: '',component:EmpresasComponent },
	{ path: 'empresas',component:EmpresasComponent },
		{ path: 'empresas/nova',component:NovaEmpresaComponent },
	{ path: 'funcoes',component:FuncoesComponent },
		{path:'funcoes/nova',component:NovaFuncaoComponent},
	{ path: 'atividades',component:AtividadesComponent },
		{path:'atividades/nova',component:NovaAtividadeComponent},
	{ path: 'subgrupos',component:SubgruposComponent },
	{ path: 'pacientes',component:PacientesComponent },
		{ path: 'pacientes/nova',component:NovoPacienteComponent },
	{ path: 'medicos',component:MedicosComponent },
		{path:'medidos/novo',component:NovoMedicoComponent},
	{ path: 'exames',component:ExamesComponent },
		{path:'exames/novo',component:NovoExameComponent},
	{ path: 'estatisticas',component:EstatisticasComponent },
	{ path: 'relatorios',component:RelatoriosComponent },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
