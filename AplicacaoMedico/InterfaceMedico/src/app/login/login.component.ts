import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./login.component.css']
})

export class LoginComponent implements OnInit {

  formularioDados:FormGroup;
  
  constructor(private Auth: AuthService, private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario(){
    this.formularioDados=this.formBuilder.group({
          login:[null,Validators.required], 
          senha:[null,Validators.required],
      
        }
      );
  }

  async loginUser() {
    let formJson;
    formJson=this.formularioDados.value;
    formJson["action"]="VERIFICA_LOGIN";
    await this.Auth.getUserDetails(formJson).subscribe(data => {
      if(data.success){
        this.Auth.setLoggedIn(true)
        this.router.navigate(['navbar']);
      }
    })
    this.formularioDados.reset();
  }
}