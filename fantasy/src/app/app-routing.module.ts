import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { NotasComponent } from './notas/notas.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';
import { ParticipantesComponent } from './participantes/participantes.component';

const routes: Routes = [
  { path: 'createParticipante', component:  ParticipantesComponent},
  { path: 'Notas', component: NotasComponent },
  { path: 'TabelaGeral', component: TabelaGeralComponent },
  {path:'TabelaParticipantes',component:TabelaParticipatesComponent},
  { path: 'editParticipante/:id', component: ParticipantesComponent },
  //rota pricipal
  { path: '', pathMatch: 'full', redirectTo: 'createParticipante' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
