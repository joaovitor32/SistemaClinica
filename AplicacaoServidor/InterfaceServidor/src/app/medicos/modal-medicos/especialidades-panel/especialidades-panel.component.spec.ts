import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesPanelComponent } from './especialidades-panel.component';

describe('EspecialidadesPanelComponent', () => {
  let component: EspecialidadesPanelComponent;
  let fixture: ComponentFixture<EspecialidadesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
