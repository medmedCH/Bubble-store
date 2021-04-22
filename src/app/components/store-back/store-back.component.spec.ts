import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBackComponent } from './store-back.component';

describe('StoreBackComponent', () => {
  let component: StoreBackComponent;
  let fixture: ComponentFixture<StoreBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
