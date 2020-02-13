import { Component, OnInit,ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ParecerService } from '../services/parecer/parecer.service';

import {ModalParecerComponent} from './modal-parecer/modal-parecer.component'

@Component({
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.css']
})
export class ParecerComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nome', 'descricao', 'operations'];
  dataSource: MatTableDataSource<any>;
	dataInput:string;
  pareceres=[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private sidenavComponent:SidenavComponent,
    private dialog:MatDialog,
    private parecerService:ParecerService
  ) { }

  ngOnInit() {
    this.sidenavComponent.activeView="Parecer";
    this.carregarParecer();
  }
  applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
  }
  async carregarParecer(){
    await this.parecerService.listaParecer().subscribe(pareceres=>{
      this.dataSource=new MatTableDataSource(pareceres);
      this.dataSource.paginator = this.paginator;
    })
  }
  visualizar(id){
    let dialog=this.dialog.open(ModalParecerComponent,{
      width:'700px',data:{id:id,acao:'VISUALIZAR'}
    })
    dialog.afterClosed().subscribe( () => {
			this.ngOnInit();
		});
  }

  editar(id){
    let dialog=this.dialog.open(ModalParecerComponent,{
      width:'700px',data:{id:id,acao:'EDITAR'}
    })
    dialog.afterClosed().subscribe(()=>{
      this.ngOnInit();
    })
  }
  deletar(id){
    let dialog=this.dialog.open(ModalParecerComponent,{
      width:'400px',data:{id:id,acao:'DELETAR'}
    })
    dialog.afterClosed().subscribe(()=>{
      this.ngOnInit();
    })
  }
} 
