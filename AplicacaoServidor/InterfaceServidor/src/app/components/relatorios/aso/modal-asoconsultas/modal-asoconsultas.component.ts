import { Component, OnInit, ViewChild,EventEmitter,Output } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";

import {ConsultasService} from "../../../../services/consulta/consultas.service"

@Component({
  selector: 'app-modal-asoconsultas',
  templateUrl: './modal-asoconsultas.component.html',
  styleUrls: ['./modal-asoconsultas.component.css']
})
export class ModalASOConsultasComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  dataInput: string;
  displayedColumns: string[] = ['codConsulta', 'nome_paciente', 'nome_empresa', 'tipo_consulta', 'dataHora', 'validade', 'operations'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Output() gerarASOEmitter = new EventEmitter();
  constructor(
    public dialog: MatDialog,
    public consultaService:ConsultasService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.carregarDadosTabela();
  }
  carregarDadosTabela() {
    this.consultaService.listaDeConsultas().subscribe(consultas => {
      this.dataSource = new MatTableDataSource(consultas);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gerarASO(codConsulta){
    this.gerarASOEmitter.emit(codConsulta);
  }
}
