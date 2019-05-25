import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  backgroundColor = environment.navBarBackgroundColor;
  
  constructor( private authService: AuthService ) {
    
  }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
}
