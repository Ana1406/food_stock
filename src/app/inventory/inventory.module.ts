import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HistoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
