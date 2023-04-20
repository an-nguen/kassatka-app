import { Component, Input } from '@angular/core'

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  title = ''

  @Input()
  cardContentFontColor = ''
}
