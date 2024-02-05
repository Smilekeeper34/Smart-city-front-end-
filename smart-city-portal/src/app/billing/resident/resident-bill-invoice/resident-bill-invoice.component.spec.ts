import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentBillInvoiceComponent } from './resident-bill-invoice.component';

describe('ResidentBillInvoiceComponent', () => {
  let component: ResidentBillInvoiceComponent;
  let fixture: ComponentFixture<ResidentBillInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentBillInvoiceComponent]
    });
    fixture = TestBed.createComponent(ResidentBillInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
