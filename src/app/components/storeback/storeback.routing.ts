import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StorebackComponent} from './storeback.component';




const routes: Routes = [
  {
    path: 'storeback',
    component: StorebackComponent,
    children: [
      {path: 'product', loadChildren: './product/product.module#ProductModule'},
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class StorebackRouting{
}
