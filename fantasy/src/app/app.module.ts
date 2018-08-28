
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AlertModule } from 'ngx-alerts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuard } from './AuthGuard';
import { JwtHelper } from '../../node_modules/angular2-jwt';


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ParticipantesComponent,
    TabelaParticipatesComponent,
    TabelaGeralComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#00abbe',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  providers: [LoginService,AuthGuard,JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
