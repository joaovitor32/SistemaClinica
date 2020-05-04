import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalASOConsultasComponent } from './modal-asoconsultas.component';

describe('ModalASOConsultasComponent', () => {
  let component: ModalASOConsultasComponent;
  let fixture: ComponentFixture<ModalASOConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalASOConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalASOConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
