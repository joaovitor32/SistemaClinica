import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // teste:string = '[{"nome":"hugo","sexo":"masculino","exames":[{"codigo":1,"nome":"pimba"},{"codigo":1,"nome":"pimba"}]},{},{},{}]';
  constructor(private sideNav:SidenavComponent) { }

  ngOnInit() {
    // console.log(JSON.parse(this.teste)[0].nome)
  }
}
