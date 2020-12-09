import { TestBed } from '@angular/core/testing';

import { HealthCheckUpServiceService } from './health-check-up-service.service';

describe('HealthCheckUpServiceService', () => {
  let service: HealthCheckUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCheckUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
