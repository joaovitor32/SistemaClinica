import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstadosAgendadosComponent } from './modal-estados-agendados.component';

describe('ModalEstadosAgendadosComponent', () => {
  let component: ModalEstadosAgendadosComponent;
  let fixture: ComponentFixture<ModalEstadosAgendadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstadosAgendadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstadosAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
