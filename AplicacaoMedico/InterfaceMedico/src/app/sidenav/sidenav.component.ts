import { Component ,OnInit,ViewEncapsulation} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute,Router} from '@angular/router';
import { UserService } from '../services/login/user.service';
import {LoginComponent} from '../login/login.component';
import {ConsultaService} from '../services/consulta/consulta.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {

  opened=true;
  nome:string;
  crm:string;
  codMedico;

  displayedColumns:string[];
  consultas=[];
  dataSource:MatTableDataSource<any>;

  constructor(
    private login:LoginComponent,
    private user:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private consultaService:ConsultaService,
    ) {
  }
  ngOnInit(){
    this.carregarDados();
    this.carregarConsultasMedico();
  }
  toggle(){
    this.opened=!this.opened;
  }
  logout(){
    this.user.logout();
    this.user.setLoggedIn(false);
    location.reload();
    
  }
  carregarDados(){
    this.route.queryParams.subscribe(params=>{
      this.nome=params['nome'];
      this.crm=params['crm'];
      this.codMedico=params["codMedico"]
    })
  }
  carregarConsultasMedico(){
    this.consultaService.consultasPorMedico(this.codMedico).subscribe(consultas=>{
      for(let consulta of consultas){
        this.consultas.push(consulta);
      }
      this.displayedColumns=['nome','data','operacoes'];
      this.dataSource=new MatTableDataSource(this.consultas);
    }) 
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  navigatePage(codConsulta,nome){
    this.router.navigate(['sidenav/consultas'],{queryParams:{
          'codConsulta':codConsulta,
          'nome':nome
        }
      })
  }
}

