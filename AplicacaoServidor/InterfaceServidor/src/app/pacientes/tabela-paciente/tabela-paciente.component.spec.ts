import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPacienteComponent } from './tabela-paciente.component';

describe('TabelaPacienteComponent', () => {
  let component: TabelaPacienteComponent;
  let fixture: ComponentFixture<TabelaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
