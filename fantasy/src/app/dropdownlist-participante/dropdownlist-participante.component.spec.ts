import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistParticipanteComponent } from './dropdownlist-participante.component';

describe('DropdownlistParticipanteComponent', () => {
  let component: DropdownlistParticipanteComponent;
  let fixture: ComponentFixture<DropdownlistParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownlistParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownlistParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
