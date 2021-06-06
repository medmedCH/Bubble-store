import {Component, Input, OnInit} from '@angular/core';
import {Cart} from '../../Models/Cart';
import {Order} from '../../Models/Order';
import {OrderService} from '../../services/order.service';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategorieService} from '../../services/categorie.service';
import {ProductService} from '../../services/product.service';
import {NgbdModalContent} from '../storeback/product/show/show.component';
import {BcoinService} from '../../services/bcoin.service';
import {SoldesBCoin} from '../../Models/SoldesBCoin';
import {Orderitem} from '../../Models/Orderitem';
const helper = new JwtHelperService();



@Component({
  selector: 'app-store',
  templateUrl: './wallet.html',
  styleUrls: ['./store.component.css']

})

// tslint:disable-next-line:component-class-suffix
export class NgbdwalletModalContent implements OnInit{
  solde:SoldesBCoin;

  constructor(public activeModal: NgbActiveModal , private bcoinservice:BcoinService,private ks :KeycloakService) {}
  async ngOnInit() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    this.bcoinservice.getsolde(decodedToken.sub).subscribe(dataa=>{
      this.solde=dataa
    })
  }
}
/*
<-----------------------------store---------------------->
*/
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  implements OnInit{
  cart:Cart;
  order:Order;
  orderitems:Orderitem[];

  constructor(private modalService: NgbModal, private orderservice:OrderService,private ks :KeycloakService, private router: Router , private cartservice:CartService ) { }
  async ngOnInit() {
    await this.loadcartprdperorder();
  }
  async loadcartprdperorder(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    if (await this.havecart()) {
      this.cart = await this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
      this.order = await this.orderservice.getuserorder(this.cart.id).toPromise();
      this.orderitems= await this.orderservice.getorderitemsperorder(this.order.id).toPromise();

    }
  }
  async havecart(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    return  this.cartservice.havecart(decodedToken.sub).toPromise();
  }
  open() {
    this.loadcartprdperorder();
    this.modalService.open(NgbdwalletModalContent);
  }



}
