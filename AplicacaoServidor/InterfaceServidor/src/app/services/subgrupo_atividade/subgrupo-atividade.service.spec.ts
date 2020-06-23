import { TestBed } from '@angular/core/testing';

import { SubgrupoAtividadeService } from './subgrupo-atividade.service';

describe('SubgrupoAtividadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubgrupoAtividadeService = TestBed.get(SubgrupoAtividadeService);
    expect(service).toBeTruthy();
  });
});
