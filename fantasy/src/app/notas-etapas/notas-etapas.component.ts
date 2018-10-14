import { Component, OnInit } from '@angular/core';
import { ServiceNotasEtapasService } from './service-notas-etapas.service';
import { EtapaParticipante } from '../Models/EtapaParticipante';
import { Etapas } from '../Models/Etapas';

@Component({
  selector: 'app-notas-etapas',
  templateUrl: './notas-etapas.component.html',
  styleUrls: ['./notas-etapas.component.css'],
  providers:[ServiceNotasEtapasService]
})
export class NotasEtapasComponent implements OnInit {

  constructor(private service:ServiceNotasEtapasService) { }
  etapaParticipante : EtapaParticipante[] = []; 
  etapas: Etapas[] = [];
  public loading = false;

  ngOnInit() {
    this.getEtapaParticipante(1);
  }

  getEtapaParticipante(id:number){
    this.loading = true;
    this.service.getEtapaParticipante(id).subscribe(
      e => {this.etapaParticipante = e, this.loading = false},    
    )  
  }

  popularTableNota(event){   
    this.etapaParticipante = [];
    let id = event.value;
    this.getEtapaParticipante(parseInt(id));
  }
}
