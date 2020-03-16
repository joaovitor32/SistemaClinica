import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  constructor(public sideNav: SidenavComponent) { }

  ngOnInit() {
    this.sideNav.activeView = "Estatísticas";
  }

}
