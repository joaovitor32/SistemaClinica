import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidades-panel',
  templateUrl: './especialidades-panel.component.html',
  styleUrls: ['./especialidades-panel.component.css']
})
export class EspecialidadesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

