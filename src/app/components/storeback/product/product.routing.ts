import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AddComponent} from './add/add.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ShowComponent} from './show/show.component';




const routes: Routes = [

  { path: 'add', component: AddComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'show', component: ShowComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }
