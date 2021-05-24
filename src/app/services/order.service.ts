import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../Models/Order';
import {Observable} from 'rxjs';
import {Cart} from '../Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addorder(order){
    return this.http.post<Order>('/api/orders',order);
  }
  haveordecart(idcart):Observable<boolean>{
    return this.http.get<boolean>('/api/orders/exists/'+idcart);
  }

}
