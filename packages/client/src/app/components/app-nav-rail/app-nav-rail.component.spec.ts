import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavRailComponent } from './app-nav-rail.component';

describe('AppNavRailComponent', () => {
  let component: AppNavRailComponent;
  let fixture: ComponentFixture<AppNavRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavRailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
