import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbordComponent } from './dashbord/dashbord.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {
    path : "dashbord",
    component : DashbordComponent
  },
  {
    path : "user-list",
    component : UserListComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "user-edit",
    component : UserEditComponent
  },
  {
    path : "user-view",
    component : UserViewComponent
  },
  {
    path : "product-list",
    component : ProductListComponent
  },
  {
    path : "product-create",
    component : ProductCreateComponent
  },
  {
    path : "product-edit",
    component : ProductEditComponent
  },
  {
    path : "product-view",
    component : ProductViewComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
