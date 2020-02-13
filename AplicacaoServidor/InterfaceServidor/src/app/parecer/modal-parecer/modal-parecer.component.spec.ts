import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParecerComponent } from './modal-parecer.component';

describe('ModalParecerComponent', () => {
  let component: ModalParecerComponent;
  let fixture: ComponentFixture<ModalParecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalParecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalParecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
