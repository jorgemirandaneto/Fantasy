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

  //participanteNovo: Participante = new Participante();
  form: FormGroup;
  @Input() participante : Participante; 
  
  constructor(private router: Router, private location: Location, private service: ServiceService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getParticipanteEdit();
  }

  onSalvarParticipante(form) {
    let result;
    let participanteValue = form.value;
    if(participanteValue.Id){
      result = this.service.updateParticipante(participanteValue);
      result.subscribe(data => this.location.back())
    }else{
      result = this.service.addParticipante(participanteValue);
      result.subscribe(data => this.location.back())
    }    
  }

  getParticipanteEdit(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getParticipanteId(id)
      .subscribe(p => this.participante = p);
  }

  onVoltarTabelaParticipante() {
    this.location.back();
  }
}
