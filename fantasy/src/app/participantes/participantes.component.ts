import { ServiceService } from './../service.service';
import { Participante } from './../Models/Participantes';
import { AlertModule } from 'ngx-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css'],
  providers:[ServiceService]
})
export class ParticipantesComponent implements OnInit {

  @Input() participante: Participante;

  constructor(private router:Router,private location: Location,private service: ServiceService) { }

  ngOnInit() {   
  }

  onSalvarParticipante(formParticipante){    
    let form = formParticipante.value
    console.log(formParticipante);
    this.service.addParticipante(form).subscribe(()=> this.onVoltarTabelaParticipante())
  }

  onVoltarTabelaParticipante(){
    this.location.back();
  }
}
