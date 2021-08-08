import { TestBed } from '@angular/core/testing';

import { RandomWordService } from './random-word.service';

describe('RandomWordService', () => {
  let service: RandomWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
