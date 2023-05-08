import { Component, Input } from '@angular/core'
import { DataTableHeader } from './data-table-header'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent<TData> {
  @Input({ required: true })
  public items: TData[] = []

  @Input({ required: true })
  public headers: DataTableHeader<TData>[] = []

  public toRecord(item: TData): Record<string, unknown> {
    return item as Record<string, unknown>
  }
}
