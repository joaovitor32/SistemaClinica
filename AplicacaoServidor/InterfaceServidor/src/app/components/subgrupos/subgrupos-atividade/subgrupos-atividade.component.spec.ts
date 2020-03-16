import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgruposAtividadeComponent } from './subgrupos-atividade.component';

describe('SubgruposAtividadeComponent', () => {
  let component: SubgruposAtividadeComponent;
  let fixture: ComponentFixture<SubgruposAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgruposAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgruposAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
