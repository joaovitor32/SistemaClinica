import { TestBed } from '@angular/core/testing';

import { RiscosService } from './riscos.service';

describe('RiscosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiscosService = TestBed.get(RiscosService);
    expect(service).toBeTruthy();
  });
});
