import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {CustomerStore} from '../../../stores/customer.store';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  username='';
  constructor(private ks :KeycloakService,private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit() {
  /* const s = document.createElement('script');
   s.src = 'assets/js/main.js';
   this.elementRef.nativeElement.appendChild(s);*/
  }

  ngOnInit() {
    this.getuserinfo();
    console.log(this.ks.getToken())
  }

private getuserinfo(){
this.username=this.ks.getUsername();
}
Logout():void{
    this.ks.logout();
}

}
