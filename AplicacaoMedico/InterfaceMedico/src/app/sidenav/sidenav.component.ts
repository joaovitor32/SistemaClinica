import { Component ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute,Router} from '@angular/router';
import { UserService } from '../services/login/user.service';
import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  opened=true;
  constructor(private login:LoginComponent,private user:UserService,private route:ActivatedRoute,private router:Router) {
  }
  ngOnInit(){
  
  }
  toggle(){
    this.opened=!this.opened;
  }
  logout(){
    this.user.logout();
    this.user.setLoggedIn(false);
    location.reload();
    
  }
}

