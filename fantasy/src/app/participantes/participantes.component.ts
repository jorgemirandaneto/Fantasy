import { AlertModule } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  onSubmit(form){
    console.log(form);
  }
  constructor(private router:Router) { }

  ngOnInit() {   
  }

  onVoltarTabelaParticipante(){
    this.router.navigate(["/tabala-participantes"]);
  }

}
