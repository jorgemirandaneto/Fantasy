import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEtapasComponent } from './notas-etapas.component';

describe('NotasEtapasComponent', () => {
  let component: NotasEtapasComponent;
  let fixture: ComponentFixture<NotasEtapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasEtapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
