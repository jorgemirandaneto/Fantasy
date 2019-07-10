import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistEtapasComponent } from './dropdownlist-etapas.component';

describe('DropdownlistEtapasComponent', () => {
  let component: DropdownlistEtapasComponent;
  let fixture: ComponentFixture<DropdownlistEtapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownlistEtapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownlistEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
