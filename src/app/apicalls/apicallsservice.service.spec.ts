import { TestBed } from '@angular/core/testing';

import { ApicallsserviceService } from './apicallsservice.service';

describe('ApicallsserviceService', () => {
  let service: ApicallsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicallsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
