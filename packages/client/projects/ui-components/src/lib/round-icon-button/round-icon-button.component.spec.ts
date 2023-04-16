import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundIconButtonComponent } from './round-icon-button.component';

describe('RoundIconButtonComponent', () => {
  let component: RoundIconButtonComponent;
  let fixture: ComponentFixture<RoundIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
