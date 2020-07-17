import { Component, OnInit,ViewChild,ViewEncapsulation } from "@angular/core";
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ModalParecerComponent } from './modal-parecer/modal-parecer.component'

import { ParecerService } from '../../services/parecer/parecer.service'

@Component({
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.css']
})
export class ParecerComponent implements OnInit {
  encapsulation: ViewEncapsulation.None;
  displayedColumns: string[] = ["name","descricao","operations"];
  dataSource: MatTableDataSource<any>;
  dataInput: string;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public sidenav: SidenavComponent,
    private parecerService: ParecerService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.sidenav.activeView = "Exames";
    this.carregarDadosTabela();
  }
  carregarDadosTabela() {
    this.parecerService.listaParecer().subscribe(pareceres => {
      this.dataSource = new MatTableDataSource(pareceres);
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
    this._snackBar.open("Lista de Pareceres atualizada !!!", null, {
        duration: 3000,
    });
  } 
  visualizar(id) {
    let dialog = this.dialog.open(ModalParecerComponent, {
      width: "700px",
      data: { id: id, acao: "VISUALIZAR" }
    });

    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  editar(id) {
    let dialog = this.dialog.open(ModalParecerComponent, {
      width: "700px",
      data: { id: id, acao: "EDITAR" }
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
