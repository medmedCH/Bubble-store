import { Component, OnInit } from '@angular/core';
import {BcoinService} from '../../../services/bcoin.service';
import {OrderService} from '../../../services/order.service';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {CartService} from '../../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Cart} from '../../../Models/Cart';
import {Order} from '../../../Models/Order';
const helper = new JwtHelperService();

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
carts:Cart[]=[];
order:Order;
orders:Order[]=[];
  constructor(private bcoinservice:BcoinService,private orderservice:OrderService,private categorieservice: CategorieService,private productservice:ProductService , private router: Router,private ks :KeycloakService,  private cartservice:CartService) { }

  async ngOnInit() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.carts= await this.cartservice.getcartspaid(decodedToken.sub).toPromise();
    console.log('carts',this.carts)
    for (let j = 0; j < this.carts.length; j++) {
      this.order=await this.orderservice.getorderr(this.carts[j].id).toPromise()
      this.orders.push(this.order);
    }
    console.log('orders',this.orders);
    }

}
