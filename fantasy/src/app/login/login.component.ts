import { Usuario } from './../Models/Usuario';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  formLogin: FormGroup;
  emitirMenu = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  validarUsuario(form) {
    console.log(form);
    this.loginService.fazerLogin(form);
  }
}
