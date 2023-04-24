import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SharedModule } from './shared/shared.module'
import { MainLayoutModule } from './core/components/main-layout/main-layout.module'
import { DashboardComponent } from './features/dashboard/component/dashboard.component';
import { ReceiptListComponent } from './features/receipt/components/receipt-list/receipt-list.component'

@NgModule({
  declarations: [AppComponent, DashboardComponent, ReceiptListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MainLayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
