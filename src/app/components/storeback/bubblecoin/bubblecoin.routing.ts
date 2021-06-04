import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ChargerComponent} from './charger/charger.component';




const routes: Routes = [
  { path: 'chargercpte', component: ChargerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubblecoinRouting { }
