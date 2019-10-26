import { TestBed } from '@angular/core/testing';

import { SubgrupoService } from './subgrupo.service';

describe('SubgrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubgrupoService = TestBed.get(SubgrupoService);
    expect(service).toBeTruthy();
  });
});
