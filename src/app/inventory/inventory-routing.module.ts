import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';

const routes : Routes= [
  {
    path: 'history', component: HistoryComponent
  },
  {
    path: 'products', component: ProductsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InventoryRoutingModule { }
