import { TestBed } from '@angular/core/testing';

import { SalasExameService } from './salas-exame.service';

describe('SalasExameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasExameService = TestBed.get(SalasExameService);
    expect(service).toBeTruthy();
  });
});
