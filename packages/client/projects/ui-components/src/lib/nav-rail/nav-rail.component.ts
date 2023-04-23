import {
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Subject, takeUntil } from 'rxjs'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavItemComponent } from '../nav-item/nav-item.component'

@Component({
  selector: 'lib-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss'],
})
export class NavRailComponent implements OnDestroy, OnChanges {
  @ContentChildren(NavItemComponent) navItems?: QueryList<NavItemComponent>
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
    this.expandedChange.subscribe((expanded) => {
      console.log(expanded)
      this.navItems?.forEach((item) => (item.expanded = expanded))
    })
  }

  ngOnDestroy(): void {
    this.destroyed.next()
    this.destroyed.complete()
    this.expandedChange.unsubscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const expanded = changes['expanded'].currentValue as boolean
    this.navItems?.forEach((item) => (item.expanded = expanded))
  }
}
