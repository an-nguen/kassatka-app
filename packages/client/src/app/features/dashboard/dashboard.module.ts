import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../../shared/shared.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, SharedModule, NgChartsModule, MatCardModule],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
