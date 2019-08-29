import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'
import { UserService } from './user.service'
import { AuthGuard } from './auth.guard'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from "./navbar/navbar.component";


import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'admin',
        component:AdminComponent,
      
      },
      {
         path:'navbar/logout',
         component:LogoutComponent,
      
      }
      ,
      {
        path:'',
        component:LoginComponent,
      },
      {
        path:'navbar',
        component:NavbarComponent,
      },
      {
        path:'home',
        component:HomeComponent,
      }
    ])
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
