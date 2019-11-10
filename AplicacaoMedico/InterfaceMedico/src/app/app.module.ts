import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login/login.component';

import { 
	MatSidenavModule, 
	MatListModule, 
	MatTableModule, 
	MatPaginatorModule, 
	MatSortModule, 
	MatFormFieldModule, 
	MatInputModule, 
	MatPaginatorIntl, 
	MatButtonModule,
	MatSelectModule,
	MatGridListModule,
	MatProgressBarModule,
	MatSnackBarModule,
	MatDialogModule,
	MatToolbarModule,
	MatIconModule,

} from  '@angular/material';
import { AuthGuard } from './services/login/auth.guard';
import { UserService } from './services/login/user.service';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
    MatSidenavModule,
		MatListModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatGridListModule,
    	MatProgressBarModule,
		MatSnackBarModule,
		MatToolbarModule,
		MatDialogModule,
		MatIconModule,
    	RouterModule.forRoot([
		{path:"login",component:LoginComponent},
		{path:"sidenav",canActivate:[AuthGuard],component:SidenavComponent},
	
    ])
  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }