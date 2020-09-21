import { TestBed } from '@angular/core/testing';

import { NovoSubgrupoService } from './novo-subgrupo.service';

describe('NovoSubgrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovoSubgrupoService = TestBed.get(NovoSubgrupoService);
    expect(service).toBeTruthy();
  });
});
