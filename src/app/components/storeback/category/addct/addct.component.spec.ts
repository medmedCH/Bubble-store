import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddctComponent } from './addct.component';

describe('AddctComponent', () => {
  let component: AddctComponent;
  let fixture: ComponentFixture<AddctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
