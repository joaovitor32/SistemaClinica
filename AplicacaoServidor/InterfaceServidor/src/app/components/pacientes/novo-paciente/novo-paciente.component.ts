import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {

  constructor(public sideNav: SidenavComponent) { }

  ngOnInit() {
    this.sideNav.activeView = "Pacientes > Novo Paciente";
  }

}
