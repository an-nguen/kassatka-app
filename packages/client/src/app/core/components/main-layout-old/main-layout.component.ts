import { Component } from '@angular/core'
import {
  faBox,
  faChartLine,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  protected readonly faReceipt = faReceipt
  protected readonly faBox = faBox
  protected readonly faChartLine = faChartLine
  protected repoUrl: string = environment.REPO_URL
}
