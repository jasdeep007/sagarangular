import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInnerInnerOneComponent } from './child-inner-inner-one.component';

describe('ChildInnerInnerOneComponent', () => {
  let component: ChildInnerInnerOneComponent;
  let fixture: ComponentFixture<ChildInnerInnerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInnerInnerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInnerInnerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
