import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
    canActivateChild:[AuthGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivateChild:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
