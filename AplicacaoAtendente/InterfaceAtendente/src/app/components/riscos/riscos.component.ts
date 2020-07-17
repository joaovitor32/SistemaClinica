import { Component, OnInit,ViewChild,ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalRiscoComponent } from '../riscos/modal-risco/modal-risco.component'
import { RiscosService } from '../../services/risco/riscos.service'

@Component({
  selector: 'app-riscos',
  templateUrl: './riscos.component.html',
  styleUrls: ['./riscos.component.css']
})
export class RiscosComponent implements OnInit {
  encapsulation: ViewEncapsulation.None;
  displayedColumns: string[] = ["name","descricao","categoria","operations"];
  dataSource: MatTableDataSource<any>;
  dataInput: string;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public sidenav: SidenavComponent,
    private riscoService: RiscosService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.sidenav.activeView = "Exames";
    this.carregarDadosTabela();
  }

  async carregarDadosTabela() {
    await this.riscoService.listaDeRiscos().subscribe(riscos => {
      this.dataSource = new MatTableDataSource(riscos);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  Alert_att(){
    this._snackBar.open("Lista de Riscos atualizada !!!", null, {
        duration: 3000,
    });
  }
  visualizar(id) {
    let dialog = this.dialog.open(ModalRiscoComponent, {
        width: "700px",
        data: { id: id, acao: "VISUALIZAR" }
    });

    dialog.afterClosed().subscribe(() => {
        this.ngOnInit();
    });
}

editar(id) {
    let dialog = this.dialog.open(ModalRiscoComponent, {
        width: "700px",
        data: { id: id, acao: "EDITAR" }
    });
    dialog.afterClosed().subscribe(() => {
        this.ngOnInit();
    });
}

}
