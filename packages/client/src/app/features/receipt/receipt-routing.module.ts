import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReceiptListComponent } from './components/receipt-list/receipt-list.component'

const routes: Routes = [{ path: '', component: ReceiptListComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptRoutingModule {}
