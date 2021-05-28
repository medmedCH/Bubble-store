import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../Models/Product';
import {ProductService} from '../../../services/product.service';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../Models/Order';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare const mytest: any;
declare const aaaaa: any;

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
    this.prod=await this.productservice.getproductbyid(this.route.snapshot.paramMap.get('idprd')).toPromise();
    this.order=await this.orderservice.getuserorder(this.route.snapshot.paramMap.get('idcart')).toPromise();
    console.log('order',this.order.cart,'produit=',this.prod);
   if(this.prod.quantity===0){
     this.disabled=true
   } else
     this.disabled=false;
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
      this.router.navigateByUrl('/store/panier');
    }
  }


}
