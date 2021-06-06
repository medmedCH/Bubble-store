import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentstripeComponent } from './paymentstripe.component';

describe('PaymentstripeComponent', () => {
  let component: PaymentstripeComponent;
  let fixture: ComponentFixture<PaymentstripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentstripeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentstripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
