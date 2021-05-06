import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../../Models/Categorie';
import {CategorieService} from '../../../services/categorie.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../Models/Product';
import {NgbdModalContent} from '../../storeback/product/show/show.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {
  cat: Categorie[] = [];
  prds:Product[] = [];
prd : Product;
  constructor(private categorieservice: CategorieService,private productservice:ProductService) {
}
ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
      console.log('aaaa=');
      console.log(data);
    });
    this.productservice.getproducts().subscribe(qq=>{
      this.prds = qq
      console.log('products=');
      console.log(qq)
    })

  }
  open(id: number) {
    this.productservice.getproductsbycat(id).subscribe(data => {
      this.prd=data;
      console.log('produit à modifier= ')
      console.log(this.prd)
    });
  }
}
