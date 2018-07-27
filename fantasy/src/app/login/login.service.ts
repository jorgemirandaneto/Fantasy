import { Usuario } from './../Models/Usuario';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  emitirMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  fazerLogin(form) {
    console.log(form.nome);
    if(form.nome != null){
      this.emitirMenu.emit(true);
      this.router.navigate(['TabelaParticipantes'])
      console.log(this.emitirMenu.emit(true));
    }else{
      this.emitirMenu.emit(true);
      console.log('errado'+form.nome);
    }
  }
}
