import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from './components/card/card.component'
import { NavRailComponent } from './components/nav-rail/nav-rail.component'
import { NavItemComponent } from './components/nav-item/nav-item.component'
import { ContentComponent } from './components/content/content.component'
import { RoundButtonComponent } from './components/round-button/round-button.component'
import { FooterComponent } from './components/footer/footer.component'
import { DataTableComponent } from './components/data-table/data-table.component'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    ContentComponent,
    RoundButtonComponent,
    FooterComponent,
    DataTableComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    ContentComponent,
    RoundButtonComponent,
    FooterComponent,
    DataTableComponent,
  ],
})
export class SharedModule {}
