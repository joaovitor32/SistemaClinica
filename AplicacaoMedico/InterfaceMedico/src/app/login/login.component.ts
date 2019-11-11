import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthGuard} from '../services/login/auth.guard';
import {UserService} from '../services/login/user.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService,private router:Router,private formBuilder:FormBuilder) { }
  formularioDados:FormGroup;

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario(){
    this.formularioDados=this.formBuilder.group({
      login:[null,Validators.required],
      senha:[null,Validators.required],
    })
  }
  async fazerLogin(){
    let formJson;
    formJson=this.formularioDados.value;
    formJson['action']="VERIFICA_LOGIN";
    await this.user.fazerLogin(formJson).subscribe(data=>{
      if(data==false){
        alert('usuario nao encontrado');
        this.user.setLoggedIn(false);
      }else if(data!=false){
        this.user.setLoggedIn(true);
        this.router.navigate(['sidenav'],{
          queryParams:{
            'codMedico':data.codMedico,
            'nome':data.nome,
            'cpf':data.cpf,
            'crm':data.crm,
          }
        });
      } 
    })
  }

}
