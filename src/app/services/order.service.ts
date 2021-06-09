import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../Models/Order';
import {Observable} from 'rxjs';
import {Orderitem} from '../Models/Orderitem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public ord: Order;
  public orderitem:Orderitem;

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
  getuseroderr(idcart):void{
     this.http.get<Order>('api/orders/getorder/'+idcart).subscribe(data=>{
       this.ord=data
     })
  }
  getorderitem(idorderitem):void{
    this.http.get<Orderitem>('api/order-items/'+idorderitem).subscribe(data1=>{
      this.orderitem=data1
    })
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
  getorderr(idcart){
    return this.http.get<Order>('api/orders/getorderss/'+idcart);
  }
}
