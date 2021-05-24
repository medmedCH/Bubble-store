import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../Models/Product';
import {Cart} from '../Models/Cart';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  addcartuser(iduser:string){
    return this.http.post<Cart>('/api/carts/customer/'+iduser,null);
  }
  getactivecart(iduser){
    return this.http.get<Cart[]>('/api/carts/customeractive/'+iduser);
  }
  havecart(iduser):Observable<boolean>{
    return this.http.get<boolean>('/api/carts/exist/'+iduser);
  }
  getactivecartuser(iduser){
    return this.http.get<Cart>('/api/carts/existcart/'+iduser);
  }
}
