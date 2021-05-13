import { TestBed } from '@angular/core/testing';

import { DisplayEventsService } from './display-events.service';

describe('DisplayEventsService', () => {
  let service: DisplayEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
