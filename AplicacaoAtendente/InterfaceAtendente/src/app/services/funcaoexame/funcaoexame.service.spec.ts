import { TestBed } from '@angular/core/testing';

import { FuncaoexameService } from './funcaoexame.service';

describe('FuncaoexameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncaoexameService = TestBed.get(FuncaoexameService);
    expect(service).toBeTruthy();
  });
});
