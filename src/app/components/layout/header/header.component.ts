import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  username='';
  constructor(private ks :KeycloakService ) {}

  ngAfterViewInit() {
  /* const s = document.createElement('script');
   s.src = 'assets/js/main.js';
   this.elementRef.nativeElement.appendChild(s);*/
  }

  async ngOnInit() {
    this.getuserinfo();
    this.getuserole();

  }

 private getuserinfo(){
           this.username=this.ks.getUsername();
        }
  public getuserole(){
     if( this.ks.isUserInRole("admin"))
      return 'admin';
     else
       return 'user';
  }
Logout():void{
    this.ks.logout();
}


}
