import { NgModule } from '@angular/core'
import { UiComponentsComponent } from './ui-components.component'
import { DataTableComponent } from './data-table/data-table.component'
import { NgForOf, NgStyle } from '@angular/common'
import { CardComponent } from './card/card.component';
import { NavRailComponent } from './nav-rail/nav-rail.component'

@NgModule({
  declarations: [UiComponentsComponent, DataTableComponent, CardComponent, NavRailComponent],
  imports: [NgForOf, NgStyle],
  exports: [UiComponentsComponent, DataTableComponent, CardComponent],
})
export class UiComponentsModule {}
