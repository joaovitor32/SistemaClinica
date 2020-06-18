import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCEPComponent } from './modal-cep.component';

describe('ModalCEPComponent', () => {
  let component: ModalCEPComponent;
  let fixture: ComponentFixture<ModalCEPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCEPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
