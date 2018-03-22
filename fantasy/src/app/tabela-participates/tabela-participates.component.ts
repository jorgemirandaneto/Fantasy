import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { Participate } from './../Models/Participantes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabela-participates',
  templateUrl: './tabela-participates.component.html',
  styleUrls: ['./tabela-participates.component.css'],
  providers:[ServiceService]
})
export class TabelaParticipatesComponent implements OnInit {

  constructor(private http: ServiceService, private router: Router) { }

  participantes: Participate[] = []  ;

  ngOnInit() {
    this.http.getParticipante().subscribe(data => {
      this.participantes = data;
    })
  }

  onNovo(){
    this.router.navigate(["/Participante"]);
  }
}
