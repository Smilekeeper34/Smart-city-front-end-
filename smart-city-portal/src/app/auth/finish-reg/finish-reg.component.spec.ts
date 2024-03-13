import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRegComponent } from './finish-reg.component';

describe('FinishRegComponent', () => {
  let component: FinishRegComponent;
  let fixture: ComponentFixture<FinishRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishRegComponent]
    });
    fixture = TestBed.createComponent(FinishRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
