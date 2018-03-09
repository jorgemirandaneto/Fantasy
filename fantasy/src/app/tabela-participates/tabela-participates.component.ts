import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { Participate } from './../Models/Participantes';

@Component({
  selector: 'app-tabela-participates',
  templateUrl: './tabela-participates.component.html',
  styleUrls: ['./tabela-participates.component.css'],
  providers:[ServiceService]
})
export class TabelaParticipatesComponent implements OnInit {

  constructor(private http: ServiceService) { }

  participantes: Participate[] = []  ;

  ngOnInit() {
    this.http.getParticipante().subscribe(data => {
      this.participantes = data;
    })
  }

}
