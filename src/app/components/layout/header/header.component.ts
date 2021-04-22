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
  constructor(private customerStore: CustomerStore,private elementRef: ElementRef, private router: Router,private keycloakService: KeycloakService) {}

  ngAfterViewInit() {
  /* const s = document.createElement('script');
   s.src = 'assets/js/main.js';
   this.elementRef.nativeElement.appendChild(s);*/
  }

  ngOnInit() {
  }

    async doLogout() {
    await this.router.navigate(['/']);
    await this.customerStore.logout();
  }
}
