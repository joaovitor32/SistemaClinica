import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultasService } from '../../services/consulta/consultas.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ModalConsultasComponent } from './modal-consultas/modal-consultas.component'

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  consultas = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['codConsulta', 'dataHora', 'inicio', 'termino', 'validade', 'tipo_consulta', 'nome_paciente', 'nome_empresa', 'operations'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private consultaService: ConsultasService,
    private sidenavComponent: SidenavComponent,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.carregaConsultas();
    this.sidenavComponent.activeView = "Consultas"
  }

  async carregaConsultas() {
    await this.consultaService.listaDeConsultas().subscribe(consultas => {
      this.dataSource = new MatTableDataSource(consultas);
      this.dataSource.paginator = this.paginator;
    }
    )
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  visualizar(id) {
    let dialog = this.dialog.open(ModalConsultasComponent, {
      width: '700px',
      data: { id: id, acao: 'VISUALIZAR' },
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
  editar(id) {
    let dialog = this.dialog.open(ModalConsultasComponent, {
      width: '700px',
      data: { id: id, acao: 'EDITAR' },
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
  deletar(id) {
    let dialog = this.dialog.open(ModalConsultasComponent, {
      width: '400px',
      data: { id: id, acao: 'DELETAR' },
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
}
