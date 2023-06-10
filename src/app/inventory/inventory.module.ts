import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';
import { InventoryRoutingModule } from './inventory-routing.module';



@NgModule({
  declarations: [
    HistoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
