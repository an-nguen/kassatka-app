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

@Component({
  selector: 'lib-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnDestroy {
  destroyed = new Subject<void>()
  @Input() navRailExpanded = false
  @Output() navRailExpandedChange = new EventEmitter<boolean>()
  @HostBinding('class.small') small = false

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.XLarge])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        this.small = result.breakpoints[Breakpoints.XSmall]
      })
  }

  ngOnDestroy(): void {
    console.log('app-layout destroyed')
    this.destroyed.next()
    this.destroyed.complete()
  }
}
