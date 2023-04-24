import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { SalesBarPlotComponent } from './components/sales-bar-plot/sales-bar-plot.component'
import { SalesAmountCardComponent } from './components/sales-amount-card/sales-amount-card.component'
import { SalesReturnsCardComponent } from './components/sales-returns-card/sales-returns-card.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [
    DashboardPageComponent,
    SalesBarPlotComponent,
    SalesAmountCardComponent,
    SalesReturnsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
