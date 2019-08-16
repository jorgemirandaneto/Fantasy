import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent]
})
export class AppComponent implements OnInit {
  constructor(private login: LoginService) { }

  title = 'app';

  validarMenu = false;

  ngOnInit() {
    this.loginMostrarMenu();
    this.mostraMenu();
  }
  mostraMenu() {
    if (localStorage.getItem('jwt') !== null) {
      this.validarMenu = true;
    }
  }

  loginMostrarMenu() {
    this.login.emitirMenu.subscribe(
      mostrar => this.validarMenu = mostrar);
    }

  logout() {
    this.login.logOut();
    this.validarMenu = false;
  }
}
