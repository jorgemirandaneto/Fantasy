import { DropdownlistParticipanteService } from './dropdownlist-participante/dropdownlist-participante.service';
import { CadastroPontuacaoComponent } from './cadastro-pontuacao/cadastro-pontuacao.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './participantes/participantes.component';
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
import { NotasEtapasComponent } from './notas-etapas/notas-etapas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDropdownModule, ModalModule, TooltipModule } from 'ngx-bootstrap';
import { DropdownlistEtapasComponent } from './dropdownlist-etapas/dropdownlist-etapas.component';
import { ServiceDdlEtapasService } from './dropdownlist-etapas/service-ddl-etapas.service';
import { CadastroPontuacaoService } from './cadastro-pontuacao/cadastro-pontuacao.service';
import { DropdownlistParticipanteComponent } from './dropdownlist-participante/dropdownlist-participante.component';





@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    TabelaParticipatesComponent,
    LoginComponent,
    NotasEtapasComponent,
    DashboardComponent,
    DropdownlistEtapasComponent,
    CadastroPontuacaoComponent,
    DropdownlistParticipanteComponent
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
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
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
  providers: [LoginService,AuthGuard,JwtHelper,ServiceDdlEtapasService,CadastroPontuacaoService,DropdownlistParticipanteService],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]

})
export class AppModule { }
