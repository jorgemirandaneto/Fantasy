import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService) { }

  title = 'app'; 

  validarMenu = false;

  OnInit(){
    this.loginService.emitirMenu.subscribe(
      mostrar => this.validarMenu = mostrar
    );
  }
}
