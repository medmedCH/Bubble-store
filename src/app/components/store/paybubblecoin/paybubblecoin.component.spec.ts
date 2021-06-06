import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybubblecoinComponent } from './paybubblecoin.component';

describe('PaybubblecoinComponent', () => {
  let component: PaybubblecoinComponent;
  let fixture: ComponentFixture<PaybubblecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaybubblecoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybubblecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
