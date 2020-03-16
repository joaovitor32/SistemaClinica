import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EspecialidadeService } from '../../services/especialidade/especialidade.service'
import { ModalEspecialidadesComponent } from './modal-especialidades/modal-especialidades.component'

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'descricao', 'operations'];
  dataSource: MatTableDataSource<any>;
  dataInput: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private sideNav: SidenavComponent,
    private especialidadeService: EspecialidadeService
  ) { }

  ngOnInit() {
    this.sideNav.activeView = "Especialidades";
    this.carregarDadosTabela();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async carregarDadosTabela() {
    await this.especialidadeService.listaDeEspecialidades().subscribe(especialidades => {
      this.dataSource = new MatTableDataSource(especialidades);
      this.dataSource.paginator = this.paginator;
    })
  }

  visualizar(id) {
    let dialog = this.dialog.open(ModalEspecialidadesComponent, {
      width: '700px', data: { id: id, acao: 'VISUALIZAR' }
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  editar(id) {
    let dialog = this.dialog.open(ModalEspecialidadesComponent, {
      width: '700px', data: { id: id, acao: 'EDITAR' }
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
  deletar(id) {
    let dialog = this.dialog.open(ModalEspecialidadesComponent, {
      width: '400px', data: { id: id, acao: 'DELETAR' }
    })
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }
}
