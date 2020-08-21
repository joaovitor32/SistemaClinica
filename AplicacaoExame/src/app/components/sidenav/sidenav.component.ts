import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { MatTableDataSource } from "@angular/material/table";

import { ConsultaService } from "../../services/consulta.service";
import { SalaService } from "../../services/sala.service";
import { ReloadService } from 'src/app/services/reload.service';
import { REALOAD_SIDENAV, DONT_REALOAD_SIDENAV } from 'src/app/constants';

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
    opened: boolean = true;
    salaSelecionada: any;

    consultas: Object[];

    displayedColumns: string[] = ["nome", "operations"];
    dataSource: MatTableDataSource<Object>;
    dataInput: string;

    constructor(
        public router: Router,
        private salaService: SalaService,
        private consultaService: ConsultaService,
        @Inject(LOCAL_STORAGE) private storage: StorageService,
        private reloadService:ReloadService,
    ) {
        let codigo = this.storage.get("labmed_codigo_sala");
        let nome = this.storage.get("labmed_nome_sala");

        if (codigo && nome) {
            this.salaService.lerSala(codigo).subscribe(exames => {
                this.salaSelecionada = {
                    codigo: codigo,
                    nome: nome,
                    exames: exames
                };
            });
        } else {
            this.router.navigate([""]);
        }
    }

    ngOnInit() {
        this.checkState();
        this.carregarConsultas();
    }

    ionViewWillEnter() {
        this.ngOnInit();
    }

    checkState(){
        this.reloadService.currentSidenav.subscribe(message=>{
            //console.log(message);
            if(message==REALOAD_SIDENAV){
                this.carregarConsultas();
                this.reloadService.updateTabelaSidenav(DONT_REALOAD_SIDENAV);
            }
        })
    }

    toggle(): void {
        this.opened = !this.opened;
    }

    carregarConsultas(): void {
        this.consultaService.listaDeConsultas().subscribe(response => {
            let consultasFiltradas = this.filtrarConsultas(response);
            this.dataSource = new MatTableDataSource(consultasFiltradas);
        });
    }

    verificarData(data: Date): Boolean {
        const dataAtual = new Date();
        let consultaNesteDia: Boolean = false;

        if (
            dataAtual.getDay() === data.getDay() &&
            dataAtual.getMonth() === data.getMonth() &&
            dataAtual.getFullYear() === data.getFullYear()
        ) {
            consultaNesteDia = true;
        }
        return consultaNesteDia;
    }

    filtrarConsultas(listaCompleta: Object): Object[] {
        let consultas = Object.values(listaCompleta);

        let consultasFiltradas = consultas.filter((consulta: any) => {
            let dataConsulta = new Date(consulta.dataHora);

            if (this.verificarData(dataConsulta)) {

                consulta.cep = Object.values(consulta.cep).filter(
                    (procedimento: any) => {
                        if (
                            this.verificarExame(procedimento.codExame) &&
                            procedimento.termino === null
                        ) {
                            return procedimento;
                        }
                    }
                );
                if (consulta.cep.length > 0) return consulta;
            }
        });

        return consultasFiltradas;
    }

    verificarExame(id): Boolean {
        let salaContemExame: Boolean = false;

        this.salaSelecionada.exames.map(exame => {
            if (exame.codExame === id) {
                salaContemExame = true;
            }
        });

        return salaContemExame;
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    logout(): void {
        this.storage.set("labmed_codigo_sala", "");
        this.storage.set("labmed_nome_sala", "");
        this.router.navigate([""]);
    }

    iniciar(consulta: Object): void {
        this.toggle();
        this.router.navigate(["/exames/procedimento"], {
            state: { consulta }
        });
    }
}
