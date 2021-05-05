import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../../Models/Categorie';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../Models/Product';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {
  cat: Categorie[] = [];
  prd:Product[] = [];
  constructor(private categorieservice: CategorieService,private productservice:ProductService) {
}
ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
      console.log('aaaa=');
      console.log(data);
    });
    this.productservice.getproducts().subscribe(qq=>{
      this.prd = qq
      console.log('products=');
      console.log(qq)
    })
  }
}
