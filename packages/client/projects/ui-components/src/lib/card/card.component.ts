import { Component, Input } from '@angular/core'

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  title = ''

  @Input()
  styles = {
    backgroundColor: '#c2e7ff',
    width: 'min-content',
    fontFamily: 'Inter, Roboto, serif',
  }

  @Input()
  cardContentFontColor = ''
}
