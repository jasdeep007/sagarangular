import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInnerOneComponent } from './child-inner-one.component';

describe('ChildInnerOneComponent', () => {
  let component: ChildInnerOneComponent;
  let fixture: ComponentFixture<ChildInnerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInnerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInnerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
