import {StoreComponent} from './store.component';
import {AccueilComponent} from './accueil/accueil.component';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';
import {Routes , RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {PaymentComponent} from './payment/payment.component';
import {CancelComponent} from './cancel/cancel.component';
import {SucessComponent} from './sucess/sucess.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    children: [
      { path: 'accueil',      component: AccueilComponent },
      { path: 'detail/:idprd/:idcart',      component: DetailproduitComponent },
      { path: 'panier',      component: CartComponent },
      { path: 'modepayement',      component: PaymentComponent },
      { path: 'cancel',      component: CancelComponent },
      { path: 'success',      component: SucessComponent },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRouting {
}
