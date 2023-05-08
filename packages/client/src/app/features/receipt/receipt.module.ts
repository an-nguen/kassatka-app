import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReceiptRoutingModule } from './receipt-routing.module'
import { ReceiptListComponent } from './components/receipt-list/receipt-list.component'

@NgModule({
  declarations: [ReceiptListComponent],
  imports: [CommonModule, ReceiptRoutingModule],
})
export class ReceiptModule {}
