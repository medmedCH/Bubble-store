
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {ChargerComponent} from './charger/charger.component';
import {BubblecoinRouting} from './bubblecoin.routing';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { AccueilComponent } from './accueil/accueil.component';
import {Filter} from './charger/filter';




@NgModule({
  imports: [
    BubblecoinRouting,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],


  declarations: [
    ChargerComponent,
    ShowbalanceComponent,
    AccueilComponent,
    Filter
  ],
  providers: [],
  exports: [],
  bootstrap: [],
  entryComponents: []
})
export class BubblecoinModule { }
