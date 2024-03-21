import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentBillingComponent } from './resident-billing.component';

describe('ResidentBillingComponent', () => {
  let component: ResidentBillingComponent;
  let fixture: ComponentFixture<ResidentBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentBillingComponent]
    });
    fixture = TestBed.createComponent(ResidentBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
