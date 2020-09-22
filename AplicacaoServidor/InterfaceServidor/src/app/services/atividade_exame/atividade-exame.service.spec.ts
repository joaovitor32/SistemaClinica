import { TestBed } from '@angular/core/testing';

import { AtividadeExameService } from './atividade-exame.service';

describe('AtividadeExameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtividadeExameService = TestBed.get(AtividadeExameService);
    expect(service).toBeTruthy();
  });
});
