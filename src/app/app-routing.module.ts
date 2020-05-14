import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './allservers/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './server-add-adminonly/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ServerEditComponentAdminOnly } from './server-edit-adminonly/server-edit-adminonly.component'

const routes: Routes = [
  {
    path: 'allservers',
    component: ProductsComponent,
    data: { title: 'List of Servers' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Server Details' }
  },
  {
    path: 'server-add-adminonly',
    component: ProductAddComponent,
    data: { title: 'Admin Add Server' }
  },
  {
    path: 'server-edit-adminonly/:id',
    component: ServerEditComponentAdminOnly,
    data: { title: 'Admin Edit Server' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Edit Server' }
  },
  { path: '',
    redirectTo: '/allservers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
