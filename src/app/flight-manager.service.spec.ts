import { TestBed } from '@angular/core/testing';

import { FlightManagerService } from './flight-manager.service';

describe('FlightManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightManagerService = TestBed.get(FlightManagerService);
    expect(service).toBeTruthy();
  });
});
