import {NgModule} from '@angular/core';
import {StorebackRouting} from './storeback.routing';
import {CommonModule} from '@angular/common';
import {StorebackComponent} from './storeback.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  imports:[
    StorebackRouting,
    CommonModule,
  ],
  declarations:[StorebackComponent],
  providers:[],
  entryComponents: [],
  })



export class StorebackModule {}
