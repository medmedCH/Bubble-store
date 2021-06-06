import { TestBed } from '@angular/core/testing';

import { BcoinService } from './bcoin.service';

describe('BcoinService', () => {
  let service: BcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
