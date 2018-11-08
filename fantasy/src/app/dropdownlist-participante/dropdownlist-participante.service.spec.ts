import { TestBed, inject } from '@angular/core/testing';

import { DropdownlistParticipanteService } from './dropdownlist-participante.service';

describe('DropdownlistParticipanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownlistParticipanteService]
    });
  });

  it('should be created', inject([DropdownlistParticipanteService], (service: DropdownlistParticipanteService) => {
    expect(service).toBeTruthy();
  }));
});
