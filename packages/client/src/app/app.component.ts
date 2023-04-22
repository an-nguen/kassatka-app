import { Component } from '@angular/core'
import { faFileInvoice, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faFileInvoice = faFileInvoice
  title = 'Kassatka App'
  expanded = false
  protected readonly faBars = faBars
}
