import { Component, OnDestroy } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'lib-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss'],
})
export class NavRailComponent implements OnDestroy {
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
