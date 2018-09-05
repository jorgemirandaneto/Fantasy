import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router'
import { Usuario } from './../Models/Usuario';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }
  err: string  = '';
  emitirMenu = new EventEmitter<boolean>();
  url = "http://localhost:5000/api/Login/"

  login(form){
    let nometeste = form.nome;
    let senhateste = form.senha;
    this.http.post(this.url + "login", {"nome": nometeste,"senha": senhateste},
    ).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);      
      this.router.navigate(['dashboard']);
      this.emitirMenu.emit(true);
    },err => {
      console.log(err);
      this.emitirMenu.emit(false);
    }    
  )
  }

  fecharMenu(menu){
    this.emitirMenu.emit(false);
    this.logOut();
  }

  logOut() {
    localStorage.removeItem("jwt");
 }
}
