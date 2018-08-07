import { Usuario } from './../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  formParticipante: FormGroup;

  constructor(private loginService: LoginService) { }
  
  ngOnInit() {
  }

  validarUsuario(form){     
    console.log(form.value);
    this.loginService.fazerLogin(form.value);
  }
}
