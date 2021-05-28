import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../Models/Order';
import {Observable} from 'rxjs';
import {Orderitem} from '../Models/Orderitem';
import {Product} from '../Models/Product';

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
  getuserorder(idcart){
    return this.http.get<Order>('api/orders/getorder/'+idcart)
  }
  addorderitemss(orderitem){
    return this.http.post<Orderitem>('api/order-items',orderitem)
  }
  getorderitemsperorder(idorder){
    return this.http.get<Orderitem[]>('api/order-items/order/'+idorder);
  }
  deleteorderitem(idorderitem){
    return this.http.delete<Orderitem>('api/order-items/'+idorderitem);
  }
  updateorderitem(id,qte){
    return this.http.put('api/order-items/'+id,qte);
  }
}
