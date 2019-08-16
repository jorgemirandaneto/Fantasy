import { AlertService } from 'ngx-alerts';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { environment } from '../../environments/environment';
@Injectable()
export class LoginService {

  constructor(private router: Router, private http: HttpClient, private alert: AlertService) { }
  err = '';
  emitirMenu = new EventEmitter<boolean>();
  url = environment.url;
  login(form) {
    const nometeste = form.nome;
    const senhateste = form.senha;
    this.http.post(`${this.url}Login/login`, { 'nome': nometeste, 'senha': senhateste }).subscribe(response => {
      const token = (<any>response).token;
      this.emitirMenu.emit(true);
      localStorage.setItem('jwt', token);
      this.router.navigate(['dashboard']);
      this.alert.success('Seja bem-vindo!');
    }, err => {
      this.emitirMenu.emit(false);
      this.alert.danger('Login e senha não confere.');
    }
    );
  }

  fecharMenu(status) {
    this.emitirMenu.emit(status);
    this.logOut();
  }

  logOut() {
    localStorage.removeItem('jwt');
  }
}
