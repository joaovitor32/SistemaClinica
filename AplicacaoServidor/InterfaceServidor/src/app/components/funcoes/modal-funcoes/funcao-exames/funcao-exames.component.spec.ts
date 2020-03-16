import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoExamesComponent } from './funcao-exames.component';

describe('FuncaoExamesComponent', () => {
  let component: FuncaoExamesComponent;
  let fixture: ComponentFixture<FuncaoExamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncaoExamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
