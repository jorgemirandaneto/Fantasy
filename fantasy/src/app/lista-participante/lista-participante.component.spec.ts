import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParticipanteComponent } from './lista-participante.component';

describe('ListaParticipanteComponent', () => {
  let component: ListaParticipanteComponent;
  let fixture: ComponentFixture<ListaParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
