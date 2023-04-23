import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DocumentListComponent } from './components/document-list/document-list.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { UiComponentsModule } from 'ui-components'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppNavRailComponent } from './components/app-nav-rail/app-nav-rail.component'

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    ProductListComponent,
    DashboardComponent,
    AppNavRailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    UiComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
