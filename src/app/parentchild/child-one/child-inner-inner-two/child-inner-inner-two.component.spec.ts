import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInnerInnerTwoComponent } from './child-inner-inner-two.component';

describe('ChildInnerInnerTwoComponent', () => {
  let component: ChildInnerInnerTwoComponent;
  let fixture: ComponentFixture<ChildInnerInnerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInnerInnerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInnerInnerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
