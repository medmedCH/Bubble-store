import {NgModule} from '@angular/core';
import {StorebackRouting} from './storeback.routing';
import {CommonModule} from '@angular/common';
import {StorebackComponent} from './storeback.component';


@NgModule({
  imports:[
    StorebackRouting,
    CommonModule
  ],
  declarations:[StorebackComponent],
  providers:[],
  entryComponents: [],
  })




export class StorebackModule {}
