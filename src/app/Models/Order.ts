import {Orderitem} from './Orderitem';
import {Cart} from './Cart';

export class Order {
    id:number;
    totalPrice:number;
  totalarticles:number;
    status:Orderstatus;
    orderItems:Array<Orderitem>;
    cart:Cart;
}
export enum Orderstatus {
  CREATION, CLOSED

}
