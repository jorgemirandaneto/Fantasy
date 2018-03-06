import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGeralComponent } from './tabela-geral.component';

describe('TabelaGeralComponent', () => {
  let component: TabelaGeralComponent;
  let fixture: ComponentFixture<TabelaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
