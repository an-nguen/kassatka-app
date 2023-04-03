import { NgModule } from '@angular/core'
import { UiComponentsComponent } from './ui-components.component'
import { DataTableComponent } from './data-table/data-table.component'
import { NgForOf } from '@angular/common';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [UiComponentsComponent, DataTableComponent, CardComponent],
  imports: [NgForOf],
  exports: [UiComponentsComponent],
})
export class UiComponentsModule {}
