import { NgModule } from '@angular/core'
import { UiComponentsComponent } from './ui-components.component'
import { DataTableComponent } from './data-table/data-table.component'
import { NgForOf, NgIf, NgStyle } from '@angular/common'
import { CardComponent } from './card/card.component'
import { NavRailComponent } from './nav-rail/nav-rail.component'
import { NavItemComponent } from './nav-item/nav-item.component'
import { RoundIconButtonComponent } from './round-icon-button/round-icon-button.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppContentComponent } from './app-content/app-content.component'

@NgModule({
  declarations: [
    UiComponentsComponent,
    DataTableComponent,
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    RoundIconButtonComponent,
    AppContentComponent,
  ],
  imports: [NgForOf, NgStyle, NgIf, FontAwesomeModule],
  exports: [
    UiComponentsComponent,
    DataTableComponent,
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    RoundIconButtonComponent,
    AppContentComponent,
  ],
})
export class UiComponentsModule {}
