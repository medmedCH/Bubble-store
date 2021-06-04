import {Component, Input, OnInit, Output} from '@angular/core';
import {Categorie} from '../../../Models/Categorie';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../Models/Product';
import {NgbdModalContent} from '../../storeback/product/show/show.component';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {CartService} from '../../../services/cart.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Cart} from '../../../Models/Cart';
import {Observable} from 'rxjs';
import {OrderService} from '../../../services/order.service';
const helper = new JwtHelperService();

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']

})

export class AccueilComponent implements OnInit {
  prod : Product;
 cart:Cart;
  cartt:Cart;
  cat: Categorie[] = [];
  prds:Product[] = [];
  constructor(private orderservice:OrderService,private categorieservice: CategorieService,private productservice:ProductService , private router: Router,private ks :KeycloakService,  private cartservice:CartService) {}
  async ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
      console.log('aaaa=');
      console.log(data);
    });
    this.productservice.getproducts().subscribe(qq=>{
      this.prds = qq
      console.log('products=');
      console.log(qq)
    });
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    if (await this.havecart()) {}
    else{
        await this.cartservice.addcartuser(decodedToken.sub).toPromise();
      }
     if(await this.haveordercartt()===true){}
      else{
       this.cartt=await this.getcartactive();
         console.log(this.cartt);
         console.log('fff')
         const ord = {
           cart: this.cartt
         }
         await this.orderservice.addorder(ord).toPromise();
         console.log('aaa')
    }
  }
  openall(){
    this.productservice.getproducts().subscribe(qq=>{
      this.prds = qq
      console.log('products=');
      console.log(qq)
    })
  }
  open(id: number) {
    this.productservice.getproductsbycat(id).subscribe(data => {
      this.prds=data;
      console.log('produits par cat ');
      console.log(this.prds);
    });
  }
  async havecart(){
    const decodedToken = helper.decodeToken(await this.ks.getToken());
   return  this.cartservice.havecart(decodedToken.sub).toPromise();
  }
  async getcartactive() {
    const decodedToken = helper.decodeToken(await this.ks.getToken());
    return   this.cartservice.getactivecartuser(decodedToken.sub).toPromise();
  }
  async haveordercartt(){
    this.cartt=await this.getcartactive();
    return this.orderservice.haveordecart(this.cartt.id).toPromise()
  }
}
