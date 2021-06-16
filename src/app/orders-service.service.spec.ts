/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersServiceService } from './orders-service.service';

describe('Service: OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersServiceService]
    });
  });

  it('should ...', inject([OrdersServiceService], (service: OrdersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
