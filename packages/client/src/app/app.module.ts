import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SharedModule } from './shared/shared.module'
import { MainLayoutModule } from './core/components/main-layout/main-layout.module'
import { DashboardModule } from './features/dashboard/dashboard.module'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { ServerInternalErrorComponent } from './core/components/server-internal-error/server-internal-error.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ServerInternalErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MainLayoutModule,
    SharedModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
