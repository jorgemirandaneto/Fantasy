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
  f : FormGroup;

  constructor(private service: CadastroPontuacaoService, private alert: AlertService) { }

  ngOnInit() {    
    this.getParticipantes();
    this.getEtapas();
  }


  getParticipantes() {
    this.service.getParticipantes()
    .then(x => this.participante = x);
  }

  getEtapas(){
    this.service.getEtapas()
    .then(x => this.etapa = x);
  }

  SalvarNota(f){
    let result = this.service.addNota(f.value);
    result.then( x => x ==='true' ? (this.alert.success('Nota Salva com sucesso') ,f.form.markAsPristine(),f.resetForm()) : this.alert.danger(x));
  }
}
