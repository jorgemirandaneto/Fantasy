import { AlertModule } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  onSubmit(form){
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
