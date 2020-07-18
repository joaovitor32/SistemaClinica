import { TestBed } from '@angular/core/testing';

import { ExameService } from './exames.service';

describe('ExamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExameService = TestBed.get(ExameService);
    expect(service).toBeTruthy();
  });
});
