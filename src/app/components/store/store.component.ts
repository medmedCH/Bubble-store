import { Component, OnInit } from '@angular/core';
import {Cart} from '../../Models/Cart';
import {Order} from '../../Models/Order';
import {Orderitem} from '../../Models/Orderitem';
import {Product} from '../../Models/Product';
import {ProductService} from '../../services/product.service';
import {OrderService} from '../../services/order.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  implements OnInit{
  cart:Cart;
  order:Order;
  constructor( private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService ) { }

 async ngOnInit() {
    await this.loadcartprdperorder();
  }
  async loadcartprdperorder(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    if (await this.havecart()) {
      this.cart = await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
      this.order = await this.orderservice.getuserorder(this.cart.id).toPromise();
    }
  }
  async havecart(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    return  this.cartservice.havecart(decodedToken.sub).toPromise();
  }
}
