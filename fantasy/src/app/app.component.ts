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
  constructor(private login: LoginComponent) { }

  title = 'app'; 

  validarMenu = false;

  ngOnInit(){
    this.login.emitirMenu.subscribe(
      mostrar => this.validarMenu = mostrar,
      console.log(this.validarMenu))

  }
}
