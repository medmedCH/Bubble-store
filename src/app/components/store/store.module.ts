import {NgModule} from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import {StoreRouting} from './store.routing';
import {StoreComponent} from './store.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { CartComponent } from './cart/cart.component';
import {CategorieService} from '../../services/categorie.service';
import {CommonModule} from '@angular/common';



@NgModule({
  imports: [
    StoreRouting,
    CommonModule,

  ],
  declarations: [
    AccueilComponent, StoreComponent, DetailproduitComponent, CartComponent
  ],
  providers: [CategorieService],
  entryComponents: [],
})
export class StoreModule {}
