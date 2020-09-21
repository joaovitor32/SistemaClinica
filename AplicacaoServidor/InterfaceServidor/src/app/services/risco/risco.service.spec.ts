import { TestBed } from '@angular/core/testing';

import { RiscoService } from './risco.service';

describe('RiscoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiscoService = TestBed.get(RiscoService);
    expect(service).toBeTruthy();
  });
});
