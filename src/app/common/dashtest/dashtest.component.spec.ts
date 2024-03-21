import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtestComponent } from './dashtest.component';

describe('DashtestComponent', () => {
  let component: DashtestComponent;
  let fixture: ComponentFixture<DashtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashtestComponent]
    });
    fixture = TestBed.createComponent(DashtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
