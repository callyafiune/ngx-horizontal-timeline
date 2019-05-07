import { TestBed } from '@angular/core/testing';

import { NgxHorizontalTimelineService } from './ngx-horizontal-timeline.service';

describe('NgxHorizontalTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHorizontalTimelineService = TestBed.get(NgxHorizontalTimelineService);
    expect(service).toBeTruthy();
  });
});
