import { AlertService } from 'ngx-alerts';
import { CadastroPontuacaoService } from './cadastro-pontuacao.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { EtapaParticipanteNota } from '../Models/EtapaParticipanteNota';
import { Participante } from '../Models/Participante';
import { Etapas } from '../Models/Etapas';

@Component({
  selector: 'app-cadastro-pontuacao',
  templateUrl: './cadastro-pontuacao.component.html',
  styleUrls: ['./cadastro-pontuacao.component.css'],  
})
export class CadastroPontuacaoComponent implements OnInit {
 notaParticipante= new EtapaParticipanteNota();
 participante: Participante[] = [];
 etapa: Etapas[] =[];
  formNota : FormGroup;

  constructor(private service: CadastroPontuacaoService, private alert: AlertService) { }

  ngOnInit() {
    this.formNota.reset();
    this.getParticipantes();
    this.getEtapas();
  }


  getParticipantes() {
    this.service.getParticipantes().subscribe(a => this.participante = a)
  }

  getEtapas(){
    this.service.getEtapas().subscribe(a => this.etapa = a);
  }

  SalvarNota(f){
    this.service.addNota(f.value)
    .then(res => console.log(res))
    .catch(res => this.alert.warning(res));
  }
}
