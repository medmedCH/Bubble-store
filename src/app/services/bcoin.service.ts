import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cart} from '../Models/Cart';
import {Order} from '../Models/Order';
import {SoldesBCoin} from '../Models/SoldesBCoin';

@Injectable({
  providedIn: 'root'
})
export class BcoinService {

  constructor(private http: HttpClient) { }
  addwalet(iduser:string){
    return this.http.post<Cart>('/api/bubblecoin/'+iduser,null);
  }
  getsolde(iduser){
    return this.http.get<SoldesBCoin>('api/bubblecoin/'+iduser)
  }
  loadaccount(id,balance){
    const requestOptions = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    return this.http.put('api/bubblecoin/load/'+id,balance,requestOptions)
  }
  unloadaccount(id,balance){
    const requestOptions = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
    return this.http.put('api/bubblecoin/unload/'+id,balance,requestOptions)
  }
}
