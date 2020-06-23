import { TestBed } from '@angular/core/testing';

import { FuncaoExameService } from './funcao-exame.service';

describe('FuncaoExameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncaoExameService = TestBed.get(FuncaoExameService);
    expect(service).toBeTruthy();
  });
});
