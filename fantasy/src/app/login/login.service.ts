import { AlertService } from 'ngx-alerts';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router'
@Injectable()
export class LoginService {

  constructor(private router: Router, private http: HttpClient, private alert: AlertService) { }
  err: string = '';
  emitirMenu = new EventEmitter<boolean>();
  url = "http://localhost:50929/api/Login/"

  login(form) {
    let nometeste = form.nome;
    let senhateste = form.senha;
    this.http.post(this.url + "login", { "nome": nometeste, "senha": senhateste }).subscribe(response => {
      let token = (<any>response).token;
      this.emitirMenu.emit(true);
      localStorage.setItem("jwt", token);
      this.router.navigate(['dashboard']);
    }, err => {
      console.log(err);
      this.emitirMenu.emit(false);
      this.alert.danger("Login e senha não confere.")
    }
    )
  }

  fecharMenu(status) {
    this.emitirMenu.emit(status);
    this.logOut();
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}
