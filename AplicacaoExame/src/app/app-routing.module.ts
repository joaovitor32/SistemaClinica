import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SelecaoComponent } from "./components/selecao/selecao.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ProcedimentoComponent } from "./components/procedimento/procedimento.component";

const routes: Routes = [
    { path: "", component: SelecaoComponent },
    {
        path: "exames",
        component: SidenavComponent,
        children: [{ path: "procedimento", component: ProcedimentoComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
