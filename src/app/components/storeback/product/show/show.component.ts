import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../Models/Product';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
prod:Product[]=[];
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getproducts().subscribe(data => {
      this.prod = data;
    });
  }

}
