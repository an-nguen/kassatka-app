import { Component, Input } from '@angular/core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ required: true }) public repoUrl = ''
  protected readonly faGithub = faGithub
}
