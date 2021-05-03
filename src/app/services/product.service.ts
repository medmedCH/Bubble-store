import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addproduct(produit){
    return this.http.post<Product>('/api/products',produit);
  }
  getproducts(){
    return this.http.get<Product[]>('api/products');
  }
}
