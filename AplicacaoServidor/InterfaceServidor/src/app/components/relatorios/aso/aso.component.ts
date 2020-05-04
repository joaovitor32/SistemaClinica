import { Component, Output,OnInit, EventEmitter,ViewChild } from '@angular/core';
import { NewAsoComponent } from './new-aso/new-aso.component';

@Component({
  selector: 'app-aso',
  templateUrl: './aso.component.html',
  styleUrls: ['./aso.component.css']
})
export class ASOComponent implements OnInit {

  codConsulta=undefined;
  @ViewChild(NewAsoComponent,{static:false})
  private newAsoComponent:NewAsoComponent;
  constructor(
   
  ) { }
  ngOnInit() {
  
  }
 
  generateASO(codConsulta){
    this.newAsoComponent.realoadAso(codConsulta);
  }
}
