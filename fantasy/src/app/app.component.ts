import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  title = 'app'; 

  validarMenu = false;

  ngOnInit(){
    this.loginService.emitirMenu.subscribe(

      mostrar => this.validarMenu = mostrar,
      console.log(this.validarMenu)

  }
}
