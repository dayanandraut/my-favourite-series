import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeriesComponent } from './update-series.component';

describe('UpdateSeriesComponent', () => {
  let component: UpdateSeriesComponent;
  let fixture: ComponentFixture<UpdateSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
