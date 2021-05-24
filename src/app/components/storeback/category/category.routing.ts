import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {AddctComponent} from './addct/addct.component';


const routes: Routes = [

  { path: 'accueil', component: AccueilComponent},
  { path: 'addcat', component: AddctComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRouting { }
