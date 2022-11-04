import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/authentication/admin.guard';
import { AuthGuard } from '../core/authentication/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

import { childRoutes } from './child-routes';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'users',
        component: UserTableComponent,
        canActivate: [AuthGuard, AdminGuard] 
      },
      ...childRoutes
    ]
  },
  // {
  //   path: 'user',
  //   component: UserTableComponent,
   
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
