
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NotasComponent } from './notas/notas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ParticipantesComponent,    
    TabelaParticipatesComponent,
    TabelaGeralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),    
    FormsModule, 
    HttpModule, 
    HttpClientModule,    
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
