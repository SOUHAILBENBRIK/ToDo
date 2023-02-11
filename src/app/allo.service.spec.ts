import { TestBed } from '@angular/core/testing';

import { AlloService } from './allo.service';

describe('AlloService', () => {
  let service: AlloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
