import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentProfileComponent } from './resident-profile.component';

describe('ResidentProfileComponent', () => {
  let component: ResidentProfileComponent;
  let fixture: ComponentFixture<ResidentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentProfileComponent]
    });
    fixture = TestBed.createComponent(ResidentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
