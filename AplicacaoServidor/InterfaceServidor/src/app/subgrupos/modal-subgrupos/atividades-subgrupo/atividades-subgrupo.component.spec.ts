import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesSubgrupoComponent } from './atividades-subgrupo.component';

describe('AtividadesSubgrupoComponent', () => {
  let component: AtividadesSubgrupoComponent;
  let fixture: ComponentFixture<AtividadesSubgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesSubgrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesSubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
