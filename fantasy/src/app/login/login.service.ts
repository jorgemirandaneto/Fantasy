import { Usuario } from './../Models/Usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  emitirMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario) {
    console.log(usuario.nome);
    if(usuario.nome != ""){
      this.emitirMenu.emit(true);
      this.router.navigate[('Participantes')]
      console.log('certo');
    }else{
      this.emitirMenu.emit(false);
      console.log('errado');
    }
  }
}
