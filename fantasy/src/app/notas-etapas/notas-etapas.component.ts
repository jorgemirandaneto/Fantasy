import { Component, OnInit } from '@angular/core';
import { ServiceNotasEtapasService } from './service-notas-etapas.service';
import { EtapaParticipante } from '../Models/EtapaParticipante';
import { Etapas } from '../Models/Etapas';
import { FormGroup } from '@angular/forms';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-notas-etapas',
  templateUrl: './notas-etapas.component.html',
  styleUrls: ['./notas-etapas.component.css'],
  providers: [ServiceNotasEtapasService]
})
export class NotasEtapasComponent implements OnInit {

  constructor(private service: ServiceNotasEtapasService, private alert: AlertService) { }
  etapaParticipante: EtapaParticipante[] = [];
  etapas: Etapas[] = [];
  public loading = false;
  idEtapa: number;

  ngOnInit() {
    this.getEtapaParticipante(1);
  }

  getEtapaParticipante(id: number) {
    this.loading = true;
    this.service.getEtapaParticipante(id).subscribe(
      e => { this.etapaParticipante = e, this.loading = false },
    )
  }

  popularTableNota(event) {
    this.getEtapaParticipante(parseInt(event.value));
    this.idEtapa = event.value;
  }

  finalizarEtapa() {
    if (this.idEtapa > 0)
      this.service.FinalizarEtapa(this.idEtapa);
    else
      this.alert.danger('Selecione uma etapa para finalizar');
  }
}
