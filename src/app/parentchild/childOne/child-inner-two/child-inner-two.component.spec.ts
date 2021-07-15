import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInnerTwoComponent } from './child-inner-two.component';

describe('ChildInnerTwoComponent', () => {
  let component: ChildInnerTwoComponent;
  let fixture: ComponentFixture<ChildInnerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInnerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInnerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
