import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbigsumComponent } from './findbigsum.component';

describe('FindbigsumComponent', () => {
  let component: FindbigsumComponent;
  let fixture: ComponentFixture<FindbigsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbigsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbigsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
