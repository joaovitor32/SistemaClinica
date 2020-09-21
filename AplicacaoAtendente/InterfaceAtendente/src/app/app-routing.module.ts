import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { EmpresasComponent } from "./components/empresas/empresas.component";
import { AgendadosComponent } from "./components/agendados/agendados.component";
import { PreAgendamento } from "./components/preagendar/preagendar.component";
import { FuncoesComponent } from "./components/funcoes/funcoes.component";
import { AtividadesComponent } from "./components/atividades/atividades.component";
import { ExamesComponent } from "./components/exames/exames.component";
import { PacientesComponent } from "./components/pacientes/pacientes.component";
import { SubgruposComponent } from "./components/subgrupos/subgrupos.component";
import { ProfissionaisComponent } from "./components/profissionais/profissionais.component";
import { RiscosComponent } from './components/riscos/riscos.component';
import { TelainicioComponent } from './components/telainicio/telainicio.component';

// ---------------------- roteamento para cadastro-----------------------

const routes: Routes = [
   { path: "", component: TelainicioComponent },
    { path: "inicio", component: InicioComponent },
    { path: "sidenav", component: SidenavComponent },
    { path: "empresas", component: EmpresasComponent },
    { path: "agendados", component: AgendadosComponent },
    { path: "preagendar", component: PreAgendamento },
    { path: "funcoes", component: FuncoesComponent },
    { path: "atividades", component: AtividadesComponent },
    { path: "exames", component: ExamesComponent },
    { path: "pacientes", component: PacientesComponent },
    { path: "subgrupos", component: SubgruposComponent },
    { path: "profissionais", component: ProfissionaisComponent },
    { path: "risco", component:RiscosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
