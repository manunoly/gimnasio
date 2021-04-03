import { TestBed } from '@angular/core/testing';

import { SokkerService } from './sokker.service';

describe('SokkerService', () => {
  let service: SokkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SokkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
