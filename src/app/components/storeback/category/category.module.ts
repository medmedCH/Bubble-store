import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddctComponent} from './addct/addct.component';
import {CategoryRouting} from './category.routing';
import { AccueilComponent } from './accueil/accueil.component';
import { ShowComponent } from './show/show.component';


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
    AccueilComponent,
    ShowComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [],
  entryComponents: []
})
export class CategoryModule { }
