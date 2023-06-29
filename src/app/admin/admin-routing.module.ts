import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { PermissionComponent } from './config/permission/permission.component';
import { UsersComponent } from './config/users/users.component';

const routes: Routes = [
  {
    path: 'settings',
    component: ConfigComponent,
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
