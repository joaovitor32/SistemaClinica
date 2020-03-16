import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { PacienteService } from '../../services/paciente/paciente.service';
import { paciente } from '../../services/paciente/paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cpf', 'empresa', 'funcao', 'operations'];
  dataSource: MatTableDataSource<paciente>;
  dataInput: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public sideNav: SidenavComponent, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.sideNav.activeView = "Pacientes";
    this.carregarDadosTabela();
  }

  async carregarDadosTabela() {
    await this.pacienteService.listaDePacientes().subscribe(pacientes => {
      this.dataSource = new MatTableDataSource(pacientes);
      this.dataSource.paginator = this.paginator;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
