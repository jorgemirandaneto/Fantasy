import { AlertService } from 'ngx-alerts';
import { Component, OnInit } from '@angular/core';
import { Devedores } from '../Models/Devedores';
import { DevedoresService } from './devedores.service';
import { RootDevedores } from '../Models/RootDevedores';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.component.html',
  styleUrls: ['./devedores.component.css']
})
export class DevedoresComponent implements OnInit {

  devedoresRoot : RootDevedores[] = [];

  constructor( private alert: AlertService, private service: DevedoresService) { }

  ngOnInit() {
    this.getDevores(1,10);    
  }

  getDevores(page:number, qtdItempage:number){
    this.service.getDevedores(page, qtdItempage)
    .then(res => {this.devedoresRoot = res, console.log(this.devedoresRoot)})
    .catch(err => {this.alert.danger("Erro ao listar os devedores")})    
  }

}
