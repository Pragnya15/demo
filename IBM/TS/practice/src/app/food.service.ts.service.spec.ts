import { TestBed } from '@angular/core/testing';

import { FoodServiceTsService } from './food.service.ts.service';

describe('FoodServiceTsService', () => {
  let service: FoodServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
