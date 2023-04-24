import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBarPlotComponent } from './sales-bar-plot.component';

describe('SalesBarPlotComponent', () => {
  let component: SalesBarPlotComponent;
  let fixture: ComponentFixture<SalesBarPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBarPlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesBarPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
