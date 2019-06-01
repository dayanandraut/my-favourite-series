import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeriesComponent } from './add-series.component';

describe('AddSeriesComponent', () => {
  let component: AddSeriesComponent;
  let fixture: ComponentFixture<AddSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
