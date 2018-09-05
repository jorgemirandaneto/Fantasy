import { TestBed, inject } from '@angular/core/testing';

import { ServiceNotasEtapasService } from './service-notas-etapas.service';

describe('ServiceNotasEtapasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceNotasEtapasService]
    });
  });

  it('should be created', inject([ServiceNotasEtapasService], (service: ServiceNotasEtapasService) => {
    expect(service).toBeTruthy();
  }));
});
