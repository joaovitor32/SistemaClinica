import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoSubgrupoComponent } from './novo-subgrupo.component';

describe('NovoSubgrupoComponent', () => {
  let component: NovoSubgrupoComponent;
  let fixture: ComponentFixture<NovoSubgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoSubgrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoSubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
