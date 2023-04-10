import { Component, Input } from '@angular/core'
import { DataTableHeader } from '../data-table-header'

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent<TData> {
  @Input()
  items: TData[] = []

  @Input()
  headers: DataTableHeader<TData>[] = []

  toRecord(item: TData): Record<string, unknown> {
    return item as Record<string, unknown>
  }
}
