import { TestBed } from '@angular/core/testing';

import { RoadtripService } from './roadtrip.service';

describe('RoadtripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoadtripService = TestBed.get(RoadtripService);
    expect(service).toBeTruthy();
  });
});
