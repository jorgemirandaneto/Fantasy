
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NotasComponent } from './notas/notas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { FormsModule } from '@angular/forms';
import { ListaParticipanteComponent } from './lista-participante/lista-participante.component';


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ParticipantesComponent,
    TabelaGeralComponent,
    ListaParticipanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),    
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
