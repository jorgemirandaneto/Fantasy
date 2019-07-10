import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  formLogin: FormGroup;
  error = '';
  chkRemenber;


  constructor(private loginService: LoginService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.loginService.fecharMenu(false);
    this.usuario.nome = this.cookie.get('nome');
    this.chkRemenber = this.cookie.get('chk') == "true" ? "checked" : "false";
    console.log(this.formLogin)
  }

  validarUsuario(form) {
    if(form.value.Check == true){
      this.cookie.set('nome', form.value.nome,30);
      this.cookie.set('chk', form.value.Check == true ? "true" : "false");
    }
    this.loginService.login(form.value)
  }
}

