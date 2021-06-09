import {NgModule} from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import {StoreRouting} from './store.routing';
import {NgbdwalletModalContent, StoreComponent} from './store.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { CartComponent } from './cart/cart.component';
import {CategorieService} from '../../services/categorie.service';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';
import { MescommandesComponent } from './mescommandes/mescommandes.component';



@NgModule({
    imports: [
        StoreRouting,
        CommonModule,
        ReactiveFormsModule,
    ],
  declarations: [
    AccueilComponent, StoreComponent, DetailproduitComponent, CartComponent, NgbdwalletModalContent, PaymentComponent, CancelComponent, SucessComponent, MescommandesComponent,
  ],
  providers: [CategorieService],
  entryComponents: [NgbdwalletModalContent],
})
export class StoreModule {}
