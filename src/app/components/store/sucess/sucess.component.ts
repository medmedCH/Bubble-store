import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {BcoinService} from '../../../services/bcoin.service';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Cart} from '../../../Models/Cart';
import {Order} from '../../../Models/Order';
const helper = new JwtHelperService();

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {
  cart:Cart;
  order:Order;
  constructor(private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService, private bcoinservice:BcoinService,private http: HttpClient) { }

  async ngOnInit() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.cart = await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
    this.order = await this.orderservice.getuserorder(this.cart.id).toPromise();
    await this.cartservice.deletecart(this.cart.id).toPromise();
    setTimeout(() => {
      this.router.navigate(['/store/accueil']);
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }, 3000);
  }

}
