import { TestBed } from '@angular/core/testing';

import { CategoriaRiscoService } from './categoria-risco.service';

describe('CategoriaRiscoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaRiscoService = TestBed.get(CategoriaRiscoService);
    expect(service).toBeTruthy();
  });
});
