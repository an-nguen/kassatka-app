import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DocumentListComponent } from './features/document-list/document-list.component'
import { ProductListComponent } from './features/product-list/product-list.component'
import { DashboardComponent } from './features/dashboard/dashboard.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppNavRailComponent } from './features/app-nav-rail/app-nav-rail.component'
import { LayoutComponent } from './shared/components/layout/layout.component'
import { NavItemComponent } from './shared/components/nav-item/nav-item.component'
import { NavRailComponent } from './shared/components/nav-rail/nav-rail.component'
import { AppContentComponent } from './shared/components/app-content/app-content.component'
import { CardComponent } from './shared/components/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    ProductListComponent,
    DashboardComponent,
    NavRailComponent,
    NavItemComponent,
    CardComponent,
    LayoutComponent,
    AppContentComponent,
    AppNavRailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
