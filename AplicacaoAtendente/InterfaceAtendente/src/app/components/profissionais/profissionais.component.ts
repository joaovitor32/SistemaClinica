import { Component, OnInit, ViewChild ,ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalProfissionalComponent } from './modal-profissionais/modal-profissionais.component';
import { profissionalService } from "../../services/profissional/profissional.service";

@Component({
    selector: "app-profissionais",
    templateUrl: "./profissionais.component.html",
    styleUrls: ["./profissionais.component.css"]
})
export class ProfissionaisComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'cpf', 'identificacao', 'operations'];
    dataSource: MatTableDataSource<any>;
    encapsulation: ViewEncapsulation.None;
    dataInput: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        public dialog: MatDialog,
        public sideNav: SidenavComponent,
        private profissionalService: profissionalService,
        public matDialog: MatDialog,
        private _snackBar: MatSnackBar,
    ) {}

    ngOnInit() {
        this.sideNav.activeView = "Profissionais";
        this.carregarProfissional();
    }

     async carregarProfissional() {
        await this.profissionalService.listaDeProfissionais().subscribe(profissionais => {
            this.dataSource = new MatTableDataSource(Object.values(profissionais));
            this.dataSource.paginator = this.paginator;
        })
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    Alert_att(){
        this._snackBar.open("Lista de Profissionais atualizada !!!", null, {
            duration: 3000,
        });
    }

    visualizar(id){
        let dialog = this.dialog.open(ModalProfissionalComponent, {
            width: '700px', data: { id: id, acao: 'VISUALIZAR' }
        });

        dialog.afterClosed().subscribe( () => {
            this.ngOnInit();
        });
    }

    // 	editar(id){
    // 		let dialog = this.dialog.open(ModalMedicosComponent, {
    // 			width: '700px', data: { id: id, acao: 'EDITAR' }
    // 		});
    // 		dialog.afterClosed().subscribe( () => {
    // 			this.ngOnInit();
    // 		});
    // 	}

    // 	deletar(id){
    // 		let dialog = this.dialog.open(ModalMedicosComponent, {
    // 			width: '400px', data: { id: id, acao: 'DELETAR' }
    // 		});
    // 		dialog.afterClosed().subscribe( () => {
    // 			this.ngOnInit();
    // 		});
    // 	}
}
