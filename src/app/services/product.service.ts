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
  getproductbyid(id){
    return this.http.get<Product>('api/products/'+id);
  }
  deleteprd(id){
    return this.http.delete<Product>('api/products/'+id);
  }
  updateprd(id,p:Product){
    return this.http.put('api/products/'+id,p);
  }
  getproductsbycat(id){
    return this.http.get<Product[]>('api/products/category/'+id);
  }
}
