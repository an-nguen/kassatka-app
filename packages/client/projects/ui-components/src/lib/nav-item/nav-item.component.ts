import { Component, Input } from '@angular/core'
import {
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_NAV_RAIL_WIDTH,
} from '../default-constants'

@Component({
  selector: 'lib-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
  expanded = false
  @Input()
  navContainerStyles = {
    height: DEFAULT_NAV_RAIL_WIDTH + 'px',
  }
}
