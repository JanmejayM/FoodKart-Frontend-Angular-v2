import { TestBed } from '@angular/core/testing';

import { CartItemserviceService } from './cart-itemservice.service';

describe('CartItemserviceService', () => {
  let service: CartItemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
