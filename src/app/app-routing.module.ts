import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'users/createuser',
    component: CreateUserComponent,
  },
  {
    path: 'users/edituser',
    component: EditUserComponent,
  },

  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'customers/createcompany',
    component: CreateCompanyComponent,
  },
  {
    path: 'customers/editcompany',
    component: EditCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  UserComponent,
  CustomerComponent,
  CreateUserComponent,
  EditUserComponent,
  CreateCompanyComponent,
  EditCompanyComponent,
];
