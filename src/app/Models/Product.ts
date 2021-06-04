import {Categorie} from './Categorie';

export class Product{
  id:number;
  title:string;
  description:string;
  price: number ;
  quantity:number;
  category:Categorie;
  imgpr:string;
  images1:string;
  images2:string;
  images3:string;
  devise:Productdevise;

}
export enum Productdevise {
 Dollar,DT,Euro,Bubble_Coin

}
