import { TestBed } from '@angular/core/testing';

import { ConsultaExameProfissionalService } from './consulta-exame-profissional.service';

describe('ConsultaExameProfissionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaExameProfissionalService = TestBed.get(ConsultaExameProfissionalService);
    expect(service).toBeTruthy();
  });
});
