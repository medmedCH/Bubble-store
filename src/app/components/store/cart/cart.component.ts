import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
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
  @Output() productAddednumber = new EventEmitter();
  cart:Cart;
  order:Order;
  orderitems:Orderitem[]=[];
  orderitemss:boolean;
  products:Product[]=[];
  product:Product;
  orderitem:Orderitem;
  disabled:boolean;

  constructor(private productservice:ProductService, private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService ) { }
  qteForm = new FormGroup({
    qte: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
     this.loadcartprdperorder();
  }
  async deleteprdd(id: number) {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    if (confirm('êtes-vous sûr de vouloir supprimer ce produit ? ')) {
      await this.orderservice.deleteorderitem(id).toPromise();
    }
    this.cart=await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
    this.orderservice.getuseroderr(this.cart.id);
    await this.loadcartprdperorder();
  }
  async loadcartprdperorder(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.cart= await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
    this.order=await this.orderservice.getuserorder(this.cart.id).toPromise();
    this.orderitems= await this.orderservice.getorderitemsperorder(this.order.id).toPromise();
    this.orderitemss=false;
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.orderitems.length; j++){
      if (this.orderitems[j].product.quantity<=0){
        this.orderitemss=true;
      }
    }
  }
 async updateorderitem(id: number) {
   const decodedToken = helper.decodeToken(await this.ks.getToken());
   await this.orderservice.updateorderitem(id,this.qteForm.value.qte).toPromise();
   this.cart=await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
   this.orderservice.getuseroderr(this.cart.id);
   await this.loadcartprdperorder();
 }
}
