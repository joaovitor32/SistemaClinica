import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { SubgruposComponent } from './subgrupos/subgrupos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ExamesComponent } from './exames/exames.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';


const routes: Routes = [
	{ path: '',component:EmpresasComponent },
	{ path: 'empresas',component:EmpresasComponent },
		{ path: 'empresas/nova',component:NovaEmpresaComponent },
	{ path: 'funcoes',component:FuncoesComponent },
	{ path: 'atividades',component:AtividadesComponent },
	{ path: 'subgrupos',component:SubgruposComponent },
	{ path: 'pacientes',component:PacientesComponent },
	{ path: 'medicos',component:MedicosComponent },
	{ path: 'exames',component:ExamesComponent },
	{ path: 'estatisticas',component:EstatisticasComponent },
	{ path: 'relatorios',component:RelatoriosComponent },
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
