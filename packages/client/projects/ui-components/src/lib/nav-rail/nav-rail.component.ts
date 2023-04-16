import { Component, Input } from '@angular/core'
import {
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_PRIMARY_COLOR,
} from '../default-constants'

@Component({
  selector: 'lib-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.css'],
})
export class NavRailComponent {
  private readonly defaultWidth: string = '56px'

  @Input()
  styles = {
    fontSize: DEFAULT_FONT_SIZE,
    fontFamily: DEFAULT_FONT_FAMILY,
    backgroundColor: DEFAULT_PRIMARY_COLOR,
    width: this.defaultWidth,
  }
}
