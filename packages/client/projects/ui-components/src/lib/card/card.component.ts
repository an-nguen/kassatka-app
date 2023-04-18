import { Component, Input } from '@angular/core'
import {
  DEFAULT_FONT_FAMILY,
  DEFAULT_PRIMARY_COLOR,
} from '../default-constants'

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  title = ''

  @Input()
  cardContentFontColor = ''
}
