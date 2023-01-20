import { TestBed } from '@angular/core/testing';

import { DemandauditService } from './demandaudit.service';

describe('DemandauditService', () => {
  let service: DemandauditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandauditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
