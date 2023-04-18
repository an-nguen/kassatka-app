import { NgModule } from '@angular/core'
import { UiComponentsComponent } from './ui-components.component'
import { DataTableComponent } from './data-table/data-table.component'
import { NgForOf, NgIf, NgStyle } from '@angular/common'
import { CardComponent } from './card/card.component'
import { NavRailComponent } from './nav-rail/nav-rail.component'
import { NavItemComponent } from './nav-item/nav-item.component'
import { RoundIconButtonComponent } from './round-icon-button/round-icon-button.component'
import { AppLayoutComponent } from './app-layout/app-layout.component'

@NgModule({
  declarations: [
    UiComponentsComponent,
    DataTableComponent,
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    RoundIconButtonComponent,
    AppLayoutComponent,
  ],
  imports: [NgForOf, NgStyle, NgIf],
  exports: [
    UiComponentsComponent,
    DataTableComponent,
    CardComponent,
    NavRailComponent,
    NavItemComponent,
    RoundIconButtonComponent,
    AppLayoutComponent,
  ],
})
export class UiComponentsModule {}
