import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../../Models/Product';
import {ProductService} from '../../../services/product.service';
declare const mytest: any;
declare const aaaaa: any;

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit{
  prod:Product;

  constructor(private productservice:ProductService, private route: ActivatedRoute ) {}
  ngOnInit() {
    mytest();
    aaaaa();
    this.productservice.getproductbyid(this.route.snapshot.params.id).subscribe(data => {
      this.prod=data;
      console.log('produit')
      console.log(this.prod);
    })
  }


}
