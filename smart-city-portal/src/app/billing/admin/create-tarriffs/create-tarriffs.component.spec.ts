import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTarriffsComponent } from './create-tarriffs.component';

describe('CreateTarriffsComponent', () => {
  let component: CreateTarriffsComponent;
  let fixture: ComponentFixture<CreateTarriffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTarriffsComponent]
    });
    fixture = TestBed.createComponent(CreateTarriffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
