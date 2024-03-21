import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDashboardComponent } from './resident-dashboard.component';

describe('ResidentDashboardComponent', () => {
  let component: ResidentDashboardComponent;
  let fixture: ComponentFixture<ResidentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentDashboardComponent]
    });
    fixture = TestBed.createComponent(ResidentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
