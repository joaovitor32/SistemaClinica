import { TestBed } from '@angular/core/testing';

import { NovaEmpresaService } from './nova-empresa.service';

describe('NovaEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovaEmpresaService = TestBed.get(NovaEmpresaService);
    expect(service).toBeTruthy();
  });
});
