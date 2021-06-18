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
import {HttpClient} from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js/pure';
import {environment} from '../../../../environments/environment';
import {Orderitem} from '../../../Models/Orderitem';
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
  orderitems:Orderitem[]=[];
  stripePromise = loadStripe(environment.stripeconfig.stripe);
  constructor(private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService, private bcoinservice:BcoinService,private http: HttpClient) { }

  async ngOnInit() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.cart= await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
    this.order=await this.orderservice.getuserorder(this.cart.id).toPromise();
    this.bcoinservice.getsolde(decodedToken.sub).subscribe(dataa=>{
      this.solde=dataa
    });
  }

 async paymentbubblecoin(){
    if(this.solde.balance>=this.order.totalbubblecoin){
      await this.bcoinservice.unloadaccount(this.solde.id,this.order.totalbubblecoin).toPromise();
      await this.cartservice.deletecart(this.cart.id).toPromise();
      alert('Votre paiement a été effectué avec succès .' +
        'Votre compte Bubble-coin sera débité de '+this.order.totalbubblecoin+'B-coin' );
        await this.router.navigateByUrl('/store/accueil');
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }else{
     alert('erreur , Votre solde Bubble-Coin est insufusant')
    }
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Montant à payer',
      currency: 'eur',
      // amount on cents *10 => to be on dollar
      amount: this.order.totalPrice,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/store/cancel',
      successUrl: 'http://localhost:4200/store/success',
    };

    const stripe = await this.stripePromise;
    // this is a normal http calls for a backend api
    this.http
      .post(`api/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }



}
