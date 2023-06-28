import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: 'settings',
    component: ConfigComponent,
    // children: [
    //   {
    //     path: 'permissions',
    //   },
    //   {
    //     path: 'users',
    //   },
    // ],
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
