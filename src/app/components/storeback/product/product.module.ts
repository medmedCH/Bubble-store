
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { AccueilComponent } from './accueil/accueil.component';
import {NgbdModalContent, ShowComponent} from './show/show.component';




@NgModule({
  imports: [
    ProductRouting,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],


  declarations: [
    AddComponent,
    AccueilComponent,
    ShowComponent,
    NgbdModalContent
  ],
  providers: [],
  exports: [],
  bootstrap: [],
  entryComponents: [NgbdModalContent]
})
export class ProductModule { }
