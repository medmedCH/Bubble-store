import {NgModule} from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {CommonModule} from '@angular/common';
import {StoreBackRouting} from './store-back.routing';
import { AddComponent } from './product/add/add.component';



@NgModule({
  imports: [
    StoreBackRouting,
    CommonModule

  ],
  declarations: [AddComponent],
  providers: [],
  entryComponents: [],
})
export class StoreBackModule {}
