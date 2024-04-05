import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousesComponent } from './view-houses.component';

describe('ViewHousesComponent', () => {
  let component: ViewHousesComponent;
  let fixture: ComponentFixture<ViewHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHousesComponent]
    });
    fixture = TestBed.createComponent(ViewHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
