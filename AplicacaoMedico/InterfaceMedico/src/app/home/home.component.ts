import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formularioPaciente:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario(){
    this.formularioPaciente=this.formBuilder.group({
      idPaciente:[null,Validators.required],
    })
  }
}
