import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Cart} from '../../../Models/Cart';
import {Order} from '../../../Models/Order';
import {BcoinService} from '../../../services/bcoin.service';
import {SoldesBCoin} from '../../../Models/SoldesBCoin';
const helper = new JwtHelperService();

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cart:Cart;
  order:Order;
  solde:SoldesBCoin;
  constructor(private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService, private bcoinservice:BcoinService) { }

  async ngOnInit() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.cart= await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
    this.order=await this.orderservice.getuserorder(this.cart.id).toPromise();
    this.bcoinservice.getsolde(decodedToken.sub).subscribe(dataa=>{
      this.solde=dataa
    })
  }

  paymentbubblecoin(){
    console.log(this.solde.balance);
    console.log(this.order.totalbubblecoin);
    if(this.solde.balance>this.order.totalbubblecoin){
      alert('votre paiement a été effectué avec succès')
    }else {
     alert('erreur , Votre solde Bubble coin est insufusant')
    }
  }

}
