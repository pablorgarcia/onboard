import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
/*  {
    path: 'product-category',
    loadChildren: () => import('../product-category/product-category.module').then(m => m.ProductCategoryModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
