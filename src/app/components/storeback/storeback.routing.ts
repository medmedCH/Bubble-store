import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StorebackComponent} from './storeback.component';
import {AuthGuard} from '../../app-auth.guard';




const routes: Routes = [
  {
    path: 'storeback/strbackkk',canActivate: [AuthGuard],data:{ roles: ['admin']},
    component: StorebackComponent,
    children: [
      {path: 'product', loadChildren: './product/product.module#ProductModule'},
      {path: 'cat', loadChildren: './category/category.module#CategoryModule'},
      {path: 'coin', loadChildren: './bubblecoin/bubblecoin.module#BubblecoinModule'},


    ]
    }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class StorebackRouting{
}
