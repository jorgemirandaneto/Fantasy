import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  formLogin: FormGroup;
  error = '';
  

  constructor(private loginService: LoginService, private router: Router,) { }

  ngOnInit() {
    this.loginService.fecharMenu(false);
  }

  validarUsuario(form) {
    this.loginService.login(form.value)
  }
}

