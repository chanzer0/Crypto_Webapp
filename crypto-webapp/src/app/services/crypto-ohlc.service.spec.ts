import { TestBed, inject } from '@angular/core/testing';

import { CryptoOhlcService } from './crypto-ohlc.service';

describe('CryptoOhlcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoOhlcService]
    });
  });

  it('should be created', inject([CryptoOhlcService], (service: CryptoOhlcService) => {
    expect(service).toBeTruthy();
  }));
});
