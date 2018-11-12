import { DropdownlistParticipanteService } from './dropdownlist-participante.service';
import { Component, OnInit } from '@angular/core';
import { Participante } from '../Models/Participante';

@Component({
  selector: 'app-dropdownlist-participante',
  templateUrl: './dropdownlist-participante.component.html',
  styleUrls: ['./dropdownlist-participante.component.css']
})
export class DropdownlistParticipanteComponent implements OnInit {

  participante: Participante[] = [];
  constructor(private service: DropdownlistParticipanteService) { }

  ngOnInit() {
    this.getParticipantes();
  }

  getParticipantes() {
    this.service.getEtapas().subscribe(a => this.participante = a)
  }
}
