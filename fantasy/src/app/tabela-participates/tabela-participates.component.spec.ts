import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaParticipatesComponent } from './tabela-participates.component';

describe('TabelaParticipatesComponent', () => {
  let component: TabelaParticipatesComponent;
  let fixture: ComponentFixture<TabelaParticipatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaParticipatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaParticipatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
