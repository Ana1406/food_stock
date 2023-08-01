import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { PermissionComponent } from './permission/permission.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'settings',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'permissions',
        component: PermissionComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,

    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
