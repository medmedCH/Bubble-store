import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebackComponent } from './storeback.component';

describe('StorebackComponent', () => {
  let component: StorebackComponent;
  let fixture: ComponentFixture<StorebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
