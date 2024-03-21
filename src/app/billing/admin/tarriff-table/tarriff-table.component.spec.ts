import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarriffTableComponent } from './tarriff-table.component';

describe('TarriffTableComponent', () => {
  let component: TarriffTableComponent;
  let fixture: ComponentFixture<TarriffTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarriffTableComponent]
    });
    fixture = TestBed.createComponent(TarriffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
