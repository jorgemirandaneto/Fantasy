import { Usuario } from './../Models/Usuario';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  formLogin: FormGroup;
  emitirMenu = new EventEmitter<boolean>();
  error = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.emitirMenu.emit(false);
  }

  validarUsuario(form) {
    this.loginService.login(form.value).subscrible(retorno => {
      let menu = retorno;
      if (menu == "true") {
        this.emitirMenu.emit(true);
      }
    }
    )
  }
}
