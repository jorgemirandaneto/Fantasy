import { TestBed, inject } from '@angular/core/testing';

import { ServiceDdlEtapasService } from './service-ddl-etapas.service';

describe('ServiceDdlEtapasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDdlEtapasService]
    });
  });

  it('should be created', inject([ServiceDdlEtapasService], (service: ServiceDdlEtapasService) => {
    expect(service).toBeTruthy();
  }));
});
