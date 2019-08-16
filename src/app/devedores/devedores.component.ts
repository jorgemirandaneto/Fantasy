import { AlertService } from 'ngx-alerts';
import { Component, OnInit, HostListener } from '@angular/core';
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
  pagina = 30;

  constructor( private alert: AlertService, private service: DevedoresService) { }

  ngOnInit() {
    this.getDevores(this.pagina);    
  }

  getDevores(qtdItempage:number){
    this.service.getDevedores(1, qtdItempage)
    .then(res => {this.devedoresRoot = res})
    .catch(err => {this.alert.danger("Erro ao listar os devedores")})    
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    if(e.target['scrollingElement'].offsetHeight  -  e.target['scrollingElement'].scrollTop === e.target['scrollingElement'].clientHeight){
      this.pagina += 20;
      this.getDevores(this.pagina); 
    }
  }
}
