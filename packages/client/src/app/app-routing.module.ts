import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component'
import { ReceiptListComponent } from './features/receipt/components/receipt-list/receipt-list.component'
import { ProductListComponent } from './features/product/pages/product-list/product-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
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
