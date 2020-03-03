import { PacientesPipe } from './pacientes.pipe';

describe('PacientesPipe', () => {
  it('create an instance', () => {
    const pipe = new PacientesPipe();
    expect(pipe).toBeTruthy();
  });
});
