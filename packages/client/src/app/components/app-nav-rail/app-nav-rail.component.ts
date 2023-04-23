import { Component } from '@angular/core'
import { faBars, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-app-nav-rail',
  templateUrl: './app-nav-rail.component.html',
  styleUrls: ['./app-nav-rail.component.scss'],
})
export class AppNavRailComponent {
  protected readonly faFileInvoice = faFileInvoice
  protected readonly faBars = faBars

  expanded = false
}
