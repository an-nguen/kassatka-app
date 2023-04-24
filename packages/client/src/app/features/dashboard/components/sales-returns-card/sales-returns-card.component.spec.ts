import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnsCardComponent } from './sales-returns-card.component';

describe('SalesReturnsCardComponent', () => {
  let component: SalesReturnsCardComponent;
  let fixture: ComponentFixture<SalesReturnsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReturnsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
