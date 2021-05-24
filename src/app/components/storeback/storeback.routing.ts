import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StorebackComponent} from './storeback.component';




const routes: Routes = [
  {
    path: 'storeback/strback',
    component: StorebackComponent,
    children: [
      {path: 'product', loadChildren: './product/product.module#ProductModule'},
      {path: 'cat', loadChildren: './category/category.module#CategoryModule'},

    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class StorebackRouting{
}
