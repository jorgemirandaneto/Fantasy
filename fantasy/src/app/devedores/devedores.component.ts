import { AlertService } from 'ngx-alerts';
import { Component, OnInit } from '@angular/core';
import { DevedoresService } from './devedores.service';
import { Devedores } from '../Models/Devedores';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.component.html',
  styleUrls: ['./devedores.component.css']
})
export class DevedoresComponent implements OnInit {

  devedores : Devedores[] = [];

  constructor(private service: DevedoresService, private alert: AlertService) { }

  ngOnInit() {
  }

  getDevores(page:number, qtdItempage:number){
    this.service.getDevedores(page, qtdItempage)
    .then(r => this.devedores = r)
    .catch(err => {this.alert.danger("Erro ao listar os devedores")})  
  }
}
