import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ChargerComponent} from './charger/charger.component';
import {ShowbalanceComponent} from './showbalance/showbalance.component';
import {AccueilComponent} from './accueil/accueil.component';




const routes: Routes = [
  { path: 'chargercpte', component: ChargerComponent},
  { path: 'showsoldes', component: ShowbalanceComponent},
  { path: 'accueil', component: AccueilComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubblecoinRouting { }
