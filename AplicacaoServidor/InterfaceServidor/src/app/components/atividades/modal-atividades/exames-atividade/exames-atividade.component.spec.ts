import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesAtividadeComponent } from './exames-atividade.component';

describe('ExamesAtividadeComponent', () => {
  let component: ExamesAtividadeComponent;
  let fixture: ComponentFixture<ExamesAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamesAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamesAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
