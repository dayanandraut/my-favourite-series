import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeriesComponent } from './view-series.component';

describe('ViewSeriesComponent', () => {
  let component: ViewSeriesComponent;
  let fixture: ComponentFixture<ViewSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
