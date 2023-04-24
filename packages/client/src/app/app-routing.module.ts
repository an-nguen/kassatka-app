import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './features/dashboard/component/dashboard.component'
import { ReceiptListComponent } from './features/receipt/components/receipt-list/receipt-list.component'
import { ProductListComponent } from './features/product/components/product-list/product-list.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'receipts',
    component: ReceiptListComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
