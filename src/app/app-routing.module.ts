import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          { path: '', redirectTo: 'product-list', pathMatch: 'full' },
          { path: 'product-list', component: ProductListComponent },
          { path: 'product-add', component: ProductAddComponent },

        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
