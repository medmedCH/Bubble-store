
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {ChargerComponent} from './charger/charger.component';
import {BubblecoinRouting} from './bubblecoin.routing';




@NgModule({
  imports: [
    BubblecoinRouting,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],


  declarations: [
    ChargerComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [],
  entryComponents: []
})
export class BubblecoinModule { }
