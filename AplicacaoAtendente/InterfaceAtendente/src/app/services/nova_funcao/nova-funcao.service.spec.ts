import { TestBed } from '@angular/core/testing';

import { NovaFuncaoService } from './nova-funcao.service';

describe('NovaFuncaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovaFuncaoService = TestBed.get(NovaFuncaoService);
    expect(service).toBeTruthy();
  });
});
