import { Usuario } from './../Models/Usuario';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  @Output() emitirMenu = new EventEmitter();
  constructor(private router: Router) { }
  fazerLogin(form) {
    console.log(form.nome);
    if(form.nome != ""){
      this.emitirMenu.emit(true);
      this.router.navigate(['createParticipante']);
      console.log('certo');
    // }else{
    //   this.emitirMenu.emit(false);
    //   console.log('errado');
    }
  }
}
