import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPontuacaoComponent } from './cadastro-pontuacao.component';

describe('CadastroPontuacaoComponent', () => {
  let component: CadastroPontuacaoComponent;
  let fixture: ComponentFixture<CadastroPontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPontuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
