import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaEspecialidadeComponent } from './nova-especialidade.component';

describe('NovaEspecialidadeComponent', () => {
  let component: NovaEspecialidadeComponent;
  let fixture: ComponentFixture<NovaEspecialidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaEspecialidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
