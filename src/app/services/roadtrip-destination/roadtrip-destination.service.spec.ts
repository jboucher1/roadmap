import { TestBed } from '@angular/core/testing';

import { RoadtripDestinationService } from './roadtrip-destination.service';

describe('RoadtripDestinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoadtripDestinationService = TestBed.get(RoadtripDestinationService);
    expect(service).toBeTruthy();
  });
});
