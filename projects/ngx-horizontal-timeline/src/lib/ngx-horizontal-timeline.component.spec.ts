import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHorizontalTimelineComponent } from './ngx-horizontal-timeline.component';

describe('NgxHorizontalTimelineComponent', () => {
  let component: NgxHorizontalTimelineComponent;
  let fixture: ComponentFixture<NgxHorizontalTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHorizontalTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHorizontalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
