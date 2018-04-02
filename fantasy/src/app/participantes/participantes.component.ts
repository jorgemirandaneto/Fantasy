import { ServiceService } from './../service.service';
import { Participante } from './../Models/Participantes';
import { AlertModule } from 'ngx-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css'],
  providers: [ServiceService]
})
export class ParticipantesComponent implements OnInit {

  participante: Participante = new Participante();
  form: FormGroup;
  
  constructor(private router: Router, private location: Location, private service: ServiceService) { }

  ngOnInit() {
  }

  onSalvarParticipante(form) {
    let result;
    let participanteValue = form.value;
    console.log(participanteValue);
    result = this.service.addParticipante(participanteValue);
    result.subscribe(data => this.location.back())
  }

  

  onVoltarTabelaParticipante() {
    this.location.back();
  }
}
