import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router'
@Injectable()
export class LoginService {
  @Output() emitirMenu = new EventEmitter();
  constructor(private router: Router, private http: HttpClient) { }
  
  url = "http://localhost:50928/api/"
  
  login(form){
    let nome = form.nome;
    let senha = form.senha;
    return this.http.post<any>(this.url + "\Login", {nome,senha})
    .pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('correntUser',JSON.stringify(user))
      }
      return user;
    }))
  }
  
  
  fazerLogin(form) {
    console.log(form.nome);
    if(form.nome != ""){
      this.emitirMenu.emit(true);
      this.router.navigate(['createParticipante']);
      console.log('certo');
    }else{
      this.emitirMenu.emit(false);
      console.log('errado');
    }
  }
}
