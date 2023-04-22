import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
} from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subject, takeUntil } from 'rxjs'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

@Component({
  selector: 'lib-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss'],
})
export class NavRailComponent implements OnDestroy {
  @HostBinding('class.expanded') @Input() expanded = false
  @Output() expandedChange = new EventEmitter<boolean>()

  protected readonly faBars = faBars
  destroyed = new Subject<void>()
  currentScreenSize = ''

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints))
          if (result.breakpoints[query]) this.currentScreenSize = query
      })
  }

  ngOnDestroy(): void {
    this.destroyed.next()
    this.destroyed.complete()
  }
}
