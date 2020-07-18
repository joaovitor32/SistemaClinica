import { TestBed } from '@angular/core/testing';

import { EmpresaPacienteFuncaoService } from './Empresa_Paciente_Funcao.service';

describe('EmpresaPacienteFuncaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresaPacienteFuncaoService = TestBed.get(EmpresaPacienteFuncaoService);
    expect(service).toBeTruthy();
  });
});
