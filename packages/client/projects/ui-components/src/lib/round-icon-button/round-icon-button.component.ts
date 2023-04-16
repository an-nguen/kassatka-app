import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'lib-round-icon-button',
  templateUrl: './round-icon-button.component.html',
  styleUrls: ['./round-icon-button.component.css'],
})
export class RoundIconButtonComponent {
  @Input() icon = ''
  @Output() clicked = new EventEmitter<unknown>()
  click() {
    this.clicked.emit()
  }
}
