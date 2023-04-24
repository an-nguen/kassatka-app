import { Component, HostBinding, Input } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input()
  @HostBinding('class.active')
  public isActive = false

  @Input()
  public icon: IconProp = faBorderNone

  @HostBinding('class.expanded')
  @Input()
  public isExpanded = false
}
