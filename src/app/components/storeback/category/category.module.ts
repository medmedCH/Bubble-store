import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbdModalContent, ShowComponent} from '../product/show/show.component';
import {AddctComponent} from './addct/addct.component';
import {CategoryRouting} from './category.routing';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  imports: [
    CategoryRouting,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],


  declarations: [
    AddctComponent,
    AccueilComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [],
  entryComponents: [NgbdModalContent]
})
export class CategoryModule { }
