import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../Models/Product';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../Models/Order';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Orderitem} from '../../../Models/Orderitem';
import {KeycloakService} from 'keycloak-angular';
declare const mytest: any;
declare const aaaaa: any;
const helper = new JwtHelperService();

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit{
  prod:Product;
  prd:Product;
 order:Order;
 disabled:boolean;
  orderitems:Orderitem[];
  orderitemss:boolean;
 constructor(private productservice:ProductService, private route: ActivatedRoute ,private  orderservice:OrderService , private router: Router) {}
  qteForm = new FormGroup({
    quantity: new FormControl('1', [Validators.required]),
  });
  get quantity() {
    return this.qteForm.get('quantity');
  }
  async ngOnInit() {
    mytest();
    aaaaa();
    console.log('aaaaaa');
    this.loadorder();
    this.loadproduct();
  }
  async loadorder(){
    this.order=await this.orderservice.getuserorder(this.route.snapshot.paramMap.get('idcart')).toPromise();
    console.log('order');
  }
  async addorderitems(){
    const orderitem={
      orderId:this.order.id,
      product:this.prod,
      quantity:this.quantity.value,
    }
    if(this.qteForm.valid) {
      this.orderservice.addorderitemss(orderitem)
        .subscribe(data=>'Bien');
      this.loadcartprdperorder();
      this.router.navigateByUrl('/store/panier');
      this.loadcartprdperorder();
    }
    this.loadcartprdperorder();

  }
  async loadcartprdperorder(){
    this.order=await this.orderservice.getuserorder(this.route.snapshot.paramMap.get('idcart')).toPromise();
    console.log('order:',this.order);
    this.orderitems= await this.orderservice.getorderitemsperorder(this.order.id).toPromise();
    console.log('orderitmes',this.orderitems);
    this.orderitemss=false;
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.orderitems.length; j++){
      if (this.orderitems[j].product.quantity<=0){
        console.log(this.orderitems[j]);
        this.orderitemss=true;
      }
    }
  }
loadproduct(){
   this.productservice.getproductbyid(this.route.snapshot.paramMap.get('idprd')).subscribe(data=>{
     this.prod=data;
   });
  this.disabled = this.prod.quantity === 0;
}

}
