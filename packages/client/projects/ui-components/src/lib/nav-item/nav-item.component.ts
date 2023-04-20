import { Component, Input } from '@angular/core'

@Component({
  selector: 'lib-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() isActive = false
  expanded = false
}
