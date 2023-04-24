import { Component, Input } from '@angular/core'
import {
  faBox,
  faChartLine,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  protected readonly faReceipt = faReceipt

  @Input()
  public isExtended = false
  protected readonly faBox = faBox
  protected readonly faChartLine = faChartLine
}
