export class Cart {
    id :number ;
    userid :string;
    status:Cartstatus;
}
export enum Cartstatus {
  NEW, CANCELED

}
