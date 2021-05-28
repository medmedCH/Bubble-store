import {Component, Input, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Cart} from '../../../Models/Cart';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../Models/Order';
import {Orderitem} from '../../../Models/Orderitem';
import {element} from 'protractor';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../Models/Product';
import { FormControl, FormGroup, Validators} from '@angular/forms';
const helper = new JwtHelperService();

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Cart;
  order:Order;
  orderitems:Orderitem[];
  products:Product[]=[];
  product:Product;
  orderitem:Orderitem;

  constructor(private productservice:ProductService, private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService ) { }
  qteForm = new FormGroup({
    qte: new FormControl('', [Validators.required]),
  });
    async ngOnInit() {
      const decodedToken = helper.decodeToken(await this.ks.getToken());
     this.cart= await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
      this.order=await this.orderservice.getuserorder(this.cart.id).toPromise();
      console.log('order:',this.order);
     this.orderitems= await this.orderservice.getorderitemsperorder(this.order.id).toPromise();
     console.log('orderitmes',this.orderitems);
    }

  deleteprdd(id: number) {
    if(confirm('êtes-vous sûr de vouloir supprimer ce produit ? ')) {
      this.orderservice.deleteorderitem(id).subscribe(data2=>'ok');
      window.location.reload();
    }
  }
  updateorderitem(id: number) {
    this.orderservice.updateorderitem(id,this.qteForm.value.qte).subscribe(data => data);
    console.log('qté',this.qteForm.value.qte)
    window.location.reload();
  }

}
