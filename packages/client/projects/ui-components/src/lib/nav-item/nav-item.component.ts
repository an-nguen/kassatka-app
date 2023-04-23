import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'lib-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() @HostBinding('class.active') isActive = false
  @Input() icon: IconProp = faBorderNone
  @HostBinding('class.expanded') @Input() expanded = false
  @Output() expandedChange = new EventEmitter<boolean>()

  @Output() clicked = new EventEmitter<void>()

  @HostListener('click')
  private onClick() {
    this.clicked.emit()
  }
}
