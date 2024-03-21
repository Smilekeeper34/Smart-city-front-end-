import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentConfigurationsComponent } from './resident-configurations.component';

describe('ResidentConfigurationsComponent', () => {
  let component: ResidentConfigurationsComponent;
  let fixture: ComponentFixture<ResidentConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentConfigurationsComponent]
    });
    fixture = TestBed.createComponent(ResidentConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
