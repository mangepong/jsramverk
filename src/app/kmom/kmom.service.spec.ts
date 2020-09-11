import { TestBed } from '@angular/core/testing';

import { KmomService } from './kmom.service';

describe('KmomService', () => {
  let service: KmomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
