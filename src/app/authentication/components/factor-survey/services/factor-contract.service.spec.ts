import { TestBed } from '@angular/core/testing';

import { FactorContractService } from './factor-contract.service';

describe('FactorContractService', () => {
  let service: FactorContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
