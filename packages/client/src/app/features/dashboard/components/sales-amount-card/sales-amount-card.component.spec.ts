import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAmountCardComponent } from './sales-amount-card.component';

describe('SalesAmountCardComponent', () => {
  let component: SalesAmountCardComponent;
  let fixture: ComponentFixture<SalesAmountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAmountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAmountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
