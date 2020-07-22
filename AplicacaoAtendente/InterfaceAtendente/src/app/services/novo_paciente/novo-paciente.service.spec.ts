import { TestBed } from '@angular/core/testing';

import { NovoPacienteService } from './novo-paciente.service';

describe('NovoPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovoPacienteService = TestBed.get(NovoPacienteService);
    expect(service).toBeTruthy();
  });
});
