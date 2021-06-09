import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../Models/Product';
import {Cart} from '../Models/Cart';
import {Observable} from 'rxjs';
import {KeycloakProfile} from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  addcartuser(iduser:string){
    return this.http.post<Cart>('/api/carts/customer/'+iduser,null);
  }
  getcartspaid(iduser){
    return this.http.get<Cart[]>('/api/carts/getcarts/'+iduser);
  }
  havecart(iduser):Observable<boolean>{
    return this.http.get<boolean>('/api/carts/exist/'+iduser);
  }
  getactivecartuser(iduser){
    return this.http.get<Cart>('/api/carts/existcart/'+iduser);
  }
  getallusers(){
    return this.http.get<KeycloakProfile[]>('http://localhost:9080/auth/admin/realms/bubble/roles/user/users');
  }
  deletecart(idcart){
    return this.http.delete<Cart>('/api/carts/'+idcart);
  }
}
