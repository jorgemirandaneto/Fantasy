import { TestBed, inject } from '@angular/core/testing';

import { CadastroPontuacaoService } from './cadastro-pontuacao.service';

describe('CadastroPontuacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroPontuacaoService]
    });
  });

  it('should be created', inject([CadastroPontuacaoService], (service: CadastroPontuacaoService) => {
    expect(service).toBeTruthy();
  }));
});
