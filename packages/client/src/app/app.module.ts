import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DocumentListComponent } from './document-list/document-list.component'
import { ProductListComponent } from './product-list/product-list.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UiComponentsModule } from 'ui-components'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    ProductListComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UiComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
