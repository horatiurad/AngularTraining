import { TestBed } from '@angular/core/testing';

import { TazzApiOrderService } from './tazz-api-order.service';

describe('TazzApiOrderService', () => {
  let service: TazzApiOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TazzApiOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
