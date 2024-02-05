import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentBillPaymentsComponent } from './resident-bill-payments.component';

describe('ResidentBillPaymentsComponent', () => {
  let component: ResidentBillPaymentsComponent;
  let fixture: ComponentFixture<ResidentBillPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentBillPaymentsComponent]
    });
    fixture = TestBed.createComponent(ResidentBillPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
