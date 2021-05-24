import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ks :KeycloakService, private router: Router , private cartservice:CartService ) { }

    async ngOnInit() {
      const decodedToken = helper.decodeToken(await this.ks.getToken());
      if(this.cartservice.getactivecart(decodedToken.sub)==null) {
        this.cartservice.addcartuser(decodedToken.sub).subscribe(data => 'Bien');
      }else console.log('Cart not payed yet');
    }

}
