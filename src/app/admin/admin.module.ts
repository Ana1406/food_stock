import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ReusableComponentModule } from '../reusable-component/reusable-component.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfigComponent,
    DashboardComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReusableComponentModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
