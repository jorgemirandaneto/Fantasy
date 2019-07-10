import { ServiceDdlEtapasService } from './service-ddl-etapas.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Etapas } from '../Models/Etapas';

@Component({
  selector: 'dropdownlist-etapas',
  templateUrl: './dropdownlist-etapas.component.html',
  styleUrls: ['./dropdownlist-etapas.component.css']
})
export class DropdownlistEtapasComponent implements OnInit {
  etapas: Etapas[] = [];
  idEvento: number;
  @Output() idEtapa = new EventEmitter();
  @Input() name;
  @Input() ngModel;
  @Input() required;
  constructor(private serviceEtapas:ServiceDdlEtapasService ) { }

  ngOnInit() {
    this.getEtapas();
  }

  getEtapas(){
    this.serviceEtapas.getEtapas().subscribe(
      e => {this.etapas = e}
    )
  }
  GetId(event){
    this.idEvento = event.target.value;
    console.log(this.idEvento);  
    this.idEtapa.emit({value: this.idEvento});
  }
}
 