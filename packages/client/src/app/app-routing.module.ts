import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'receipts',
    loadChildren: () =>
      import('./features/receipt/receipt.module').then((m) => m.ReceiptModule),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  { path: 'documents', loadChildren: () => import('./features/document/document.module').then(m => m.DocumentModule) },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
